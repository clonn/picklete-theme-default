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
    // shouldCallAPI: (state) => state.member.login.status != 'success',
    callAPI: () => fetch('/api/auth/local', {
      method: 'POST',
      body: JSON.stringify({
        identifier: email,
        password
      })
    }),
    afterSuccess: ({dispatch, response}) => dispatch(fetchMemberData({token: response.token}))
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
