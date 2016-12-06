import createFetchActionType from 'generic/modules/createFetchActionType'

import { changeModalActive as changeModalActive} from 'App/actions/ModalActions'
import { addNotification } from 'App/actions/NotificationActions'

export const LOGIN = createFetchActionType('member', 'LOGIN');
export const LOGOUT = createFetchActionType('member', 'LOGOUT');
export const FETCH_MEMBER_DATA = createFetchActionType('member', 'FETCH_MEMBER_DATA');
export const AUTO_LOGIN = 'member.AUTO_LOGIN';

export const REGISTER_MEMBER_DATA = {
  request: 'member.REGISTER_MEMBER_DATA.request',
  success: 'member.REGISTER_MEMBER_DATA.success',
  error: 'member.REGISTER_MEMBER_DATA.error',
};

export function login({email, password}) {
  return {
    actionType: [LOGIN.request, LOGIN.success, LOGIN.error],
    shouldCallAPI: (state) => state.member.status != 'success',
    callAPI: () => fetch('/api/auth/local', {
      method: 'POST',
      body: JSON.stringify({
        identifier: email,
        password
      })
    }),
    afterSuccess: ({dispatch, response}) => {
      localStorage.token = response.token;
      dispatch(fetchMemberData());
      dispatch(changeModalActive('login', false));
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
    afterSuccess: ({dispatch, response}) => {
      dispatch(addNotification({
        title: '登出成功',
        type: 'success'
      }));
    }
  }
}


export function registerMemberData( newMemberData ) {
  let user = Object.assign({}, newMemberData, { RoleId: 1});

  return {
    actionType: [REGISTER_MEMBER_DATA.request, REGISTER_MEMBER_DATA.success, REGISTER_MEMBER_DATA.error],
    callAPI: () => fetch('/api/user/', {
      method: 'POST',
      body: JSON.stringify({ user })
    }),
    afterSuccess: ({dispatch, response}) => {
      dispatch(addNotification({
        title: '註冊成功',
        message: '感謝您的加入，祝您購物愉快',
        type: 'success'
      }));
    },
    afterError: async({dispatch, httpResponse}) => {
      dispatch(addNotification({
        title: '註冊失敗',
        message: '請聯絡管理人員',
        type: 'error'
      }));
    }
  }
}
