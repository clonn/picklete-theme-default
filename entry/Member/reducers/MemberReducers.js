import { LOGIN, FETCH_MEMBER_DATA, AUTO_LOGIN } from 'Member/actions/MemberAction'

const initialState = {
  status: null,
  // token: null,
  data: {}
};

export default function member(state = initialState, {type, payload}) {
  switch (type) {
    case LOGIN.success:
    case AUTO_LOGIN:
      return {
        ...state,
        status: 'success',
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
