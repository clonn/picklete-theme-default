import { LOGIN, FETCH_MEMBER_DATA } from 'Member/actions/MemberAction'

const initialState = {
  status: null,
  token: null,
  data: {}
};

export default function modals(state = initialState, {type, payload}) {
  switch (type) {
    case LOGIN.success:
      return {
        ...state,
        status: 'success',
        token: payload.response.token
      };
    case FETCH_MEMBER_DATA.success:
      return {
        ...state,
        data: payload.response
      }
    default:
      return state;
  }
}
