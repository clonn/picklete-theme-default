import { changeModalActive as changeModalActive} from 'App/actions/ModalActions'
import { addNotification } from 'App/actions/NotificationActions'

export const LOGIN = {
  request: 'member.LOGIN.request',
  success: 'member.LOGIN.success',
  error: 'member.LOGIN.error',
};

export const FETCH_MEMBER_DATA = {
  request: 'member.FETCH_MEMBER_DATA.request',
  success: 'member.FETCH_MEMBER_DATA.success',
  error: 'member.FETCH_MEMBER_DATA.error',
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
      dispatch(fetchMemberData({token: response.token}));
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

export function fetchMemberData({token}) {
  return {
    actionType: [FETCH_MEMBER_DATA.request, FETCH_MEMBER_DATA.success, FETCH_MEMBER_DATA.error],
    callAPI: () => fetch('/api/me', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
  }
}
