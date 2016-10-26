import { FETCH_DPTS_API, FETCH_PRODUCT_API } from 'Shop/actions/ShopActions'

export const ShopReducers = {
  stateKey: 'shop',
  initialState: {
    dpts: {status: null, scrollTop: 0, data: []},
    products: {}
  },
  reducers: (state, action, {merge}) => ({
    [FETCH_DPTS_API.request]: merge({
      dpts: {
        status: 'fetching'
      }
    }),

    [FETCH_DPTS_API.success]: merge({
      dpts: {
        status: 'success',
        data: action.payload.response,
      }

    }),

    [FETCH_DPTS_API.error]: merge({
      dpts: {
        status: 'error',
        error: action.payload.error
      }
    }),

    // detail Fetch API
    [FETCH_PRODUCT_API.request]: merge({
      product: {
        [action.payload.id]: {
          status: 'fetching'
        }
      }
    }),

    [FETCH_PRODUCT_API.success]: merge({
      product: {
        [action.payload.id]: {
          status: 'success',
          data: action.payload.response
        }
      }
    }),

    [FETCH_PRODUCT_API.error]: merge({
      product: {
        [action.payload.id]: {
          status: 'error',
          error: action.payload.error
        }
      }
    }),

    // List scroll
    [LIST_SCROLL_TOP.save]: merge({
      dpts: {
        scrollTop: action.payload.scrollTop
      }
    }),

    [LIST_SCROLL_TOP.reset]: merge({
      dpts: {
        scrollTop: 0
      }
    })
  })
};
