import createFetchActionType from 'generic/modules/createFetchActionType'
import { browserHistory } from 'react-router'

import { changeModalActive } from 'App/actions/ModalActions'
import { addNotification } from 'App/actions/NotificationActions'

export const LOGIN = createFetchActionType('member', 'LOGIN');
export const LOGOUT = createFetchActionType('member', 'LOGOUT');
export const FETCH_MEMBER_DATA = createFetchActionType('member', 'FETCH_MEMBER_DATA');
export const AUTO_LOGIN = 'member.AUTO_LOGIN';
export const REGISTER_MEMBER_DATA = createFetchActionType('member', 'REGISTER_MEMBER_DATA');

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

export function autoLogin() {
  return {
    type: AUTO_LOGIN
  }
}

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


export function logout() {
  localStorage.removeItem('token');
  return {
    actionType: [LOGOUT.request, LOGOUT.success, LOGOUT.error],
    callAPI: () => fetch('/api/logout'),
    handleResponse: (httpResponse) => httpResponse.text()
  }
}


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
