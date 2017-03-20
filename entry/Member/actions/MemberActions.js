import createFetchActionType from 'generic/modules/createFetchActionType'
import { browserHistory } from 'react-router'

import { changeModalActive } from 'App/actions/ModalActions'
import { addNotification } from 'App/actions/NotificationActions'

// 普通登入
export const LOGIN = createFetchActionType('member', 'LOGIN');
export function login({authType, email, password}) {
  let uri = `/api/auth/${authType}`;
  let fetchOptions = {};

  switch (authType) {
    case 'local':
      fetchOptions.method = 'POST';
      fetchOptions.body = JSON.stringify({
        identifier: email,
        password
      });
      break;
    case 'line':
      return location.href = `${uri}`;
      break;
  }

  return {
    actionType: [LOGIN.request, LOGIN.success, LOGIN.error],
    shouldCallAPI: (state) => state.member.status != 'success',
    callAPI: () => fetch(uri, fetchOptions),
    afterSuccess: ({dispatch, response}) => {
      localStorage.token = response.token;
      dispatch(fetchMemberData());
      dispatch(changeModalActive('login', false));
      dispatch(addNotification({
        title: '登入成功',
        type: 'success'
      }));
      browserHistory.push('/');      
    },
    afterError: async({dispatch, httpResponse}) => {
      const body = await httpResponse.text();
      const errorMsgs = ['Error.Passport.Username.NotFound', 'Error.Passport.Email.NotFound', 'Error.Passport.Password.Wrong'];
      if (httpResponse.status == 400 && errorMsgs.includes(body)) {
        dispatch(addNotification({
          title: '登入失敗',
          message: '請確認您輸入的資訊是否正確',
          type: 'error'
        }));
      } else {
        dispatch(addNotification({
          title: '連線失敗',
          message: '請確認您的網路連線正常',
          type: 'error'
        }));
      }
    }
  };
}

// 自動登入
export const AUTO_LOGIN = 'member.AUTO_LOGIN';
export function autoLogin() {
  return {
    type: AUTO_LOGIN
  }
}

// 獲取會員個人資料
export const FETCH_MEMBER_DATA = createFetchActionType('member', 'FETCH_MEMBER_DATA');
export function fetchMemberData() {
  return {
    actionType: [FETCH_MEMBER_DATA.request, FETCH_MEMBER_DATA.success, FETCH_MEMBER_DATA.error],
    shouldCallAPI: () => Boolean(localStorage.token),
    callAPI: () => fetch('/api/me', {
      headers: {
        'Authorization': `Bearer ${localStorage.token}`
      }
    })
  }
}

// 登出
export const LOGOUT = createFetchActionType('member', 'LOGOUT');
export function logout() {
  localStorage.removeItem('token');
  return {
    actionType: [LOGOUT.request, LOGOUT.success, LOGOUT.error],
    callAPI: () => fetch('/api/logout'),
    handleResponse: (httpResponse) => httpResponse.text(),
    afterSuccess: ({dispatch}) => {
      dispatch(addNotification({
        title: '登出成功',
        type: 'success'
      }));
      browserHistory.push('/');      
    }
  }
}

// 註冊新會員
export const REGISTER_MEMBER_DATA = createFetchActionType('member', 'REGISTER_MEMBER_DATA');
export function registerMemberData( newMemberData ) {
  return {
    actionType: [REGISTER_MEMBER_DATA.request, REGISTER_MEMBER_DATA.success, REGISTER_MEMBER_DATA.error],
    callAPI: () => fetch('/api/auth/local/register', {
      method: 'POST',
      body: JSON.stringify(newMemberData)
    }),
    afterSuccess: ({dispatch, response}) => {
      localStorage.token = response.token;
      dispatch(autoLogin());
      dispatch(fetchMemberData());
      browserHistory.push('/');
    },
    afterError: async({dispatch, httpResponse}) => {
      const body = await httpResponse.text();
      const message = body || '請聯絡管理人員';

      dispatch(addNotification({
        title: '註冊失敗',
        message: message,
        type: 'error'
      }));
    }
  }
}

// 更新會員個人資料
export const UPDATE_MEMBER_DATA = createFetchActionType('member', 'UPDATE_MEMBER_DATA');
export function updateMemberData(memberData) {
  return {
    actionType: [UPDATE_MEMBER_DATA.request, UPDATE_MEMBER_DATA.success, UPDATE_MEMBER_DATA.error],
    callAPI: () => fetch('/api/me', {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${localStorage.token}`
      },
      body: JSON.stringify(memberData)
    }),
    handleResponse: (httpResponse) => httpResponse.text(),    
    afterSuccess: ({dispatch}) => {
      dispatch(addNotification({
        title: '會員資料修改成功',
        type: 'success'
      }));
    },
    afterError: async({dispatch, httpResponse}) => {
      const body = await httpResponse.text();
      const message = body || '請聯絡管理人員';

      dispatch(addNotification({
        title: '註冊失敗',
        message: message,
        type: 'error'
      }));
    }
  }
}
