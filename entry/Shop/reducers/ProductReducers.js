import { FETCH_PRODUCTS_LIST_API } from 'Shop/actions/ProductActions'

const initialState = {
  list: {
    status: null,
    data: []
  },
  detail: {}
};

export default function products(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_LIST_API.request:
      return _.merge({}, state, {
        list: {
          status: 'fetching'
        }
      });
    case FETCH_PRODUCTS_LIST_API.success:
      return _.merge({}, state, {
        list: {
          status: 'success',
          data: action.payload.response
        }
      });
    case FETCH_PRODUCTS_LIST_API.error:
      return _.merge({}, state, {
        list: {
          status: 'error',
          error: action.payload.error
        }
      });
    default:
      return state;
  }
}
