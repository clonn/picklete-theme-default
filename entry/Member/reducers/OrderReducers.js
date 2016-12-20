import { FETCH_DATA } from 'Member/actions/OrderActions'

const initialState = {
  status: null,
  data: []
};

export default function orders(state = initialState, {type, payload}) {
  switch (type) {
    case FETCH_DATA.success:
      return {
        status: 'success',
        data: payload.response
      }
    default:
      return state;
  }
}
