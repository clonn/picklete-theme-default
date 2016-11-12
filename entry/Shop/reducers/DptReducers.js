import { FETCH_API } from 'Shop/actions/DptActions'

const initialState = {
  status: null,
  data: []
};

export default function dpts(state = initialState, action) {
  switch (action.type) {
    case FETCH_API.request:
      return _.merge({}, state, {
        status: 'fetching'
      });
    case FETCH_API.success:
      return _.merge({}, state, {
        status: 'success',
        data: action.payload.response,
      });
    case FETCH_API.error:
      return _.merge({}, state, {
        status: 'error',
        error: action.payload.error
      });
    default:
      return state;
  }
}
