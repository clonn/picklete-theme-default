import {FETCH_COMPANY_API} from 'App/actions/GeneralDataActions'

const initialState = {
  status: null,
  data: {
    logo: ''
  }
};

export default function company(state = initialState, action) {
  switch (action.type) {
    case FETCH_COMPANY_API.request:
      return _.merge({}, state, {status: 'fetching'});
    case FETCH_COMPANY_API.success:
      return _.merge({}, state, {
        status: 'success',
        data: action.payload.response
      });
    case FETCH_COMPANY_API.error:
      return _.merge({}, state, {
        status: 'error',
        error: action.payload.error
      });
    default:
      return state;
  }
}
