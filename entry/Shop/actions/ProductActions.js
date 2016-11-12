// FETCH_LIST_API
export const FETCH_LIST_API = {
  request: 'products.FETCH_LIST_API.request',
  success: 'products.FETCH_LIST_API.success',
  error: 'products.FETCH_LIST_API.error'
};

export function fetchListAPI() {
  return {
    actionType: [FETCH_LIST_API.request, FETCH_LIST_API.success, FETCH_LIST_API.error],
    shouldCallAPI: (state) => state.products.list.status != 'success',
    callAPI: () => fetch('/api/products')
  }
}

// FETCH_DETAIL_API
export const FETCH_DETAIL_API = {
  request: 'products.FETCH_DETAIL_API.request',
  success: 'products.FETCH_DETAIL_API.success',
  error: 'products.FETCH_DETAIL_API.error'
};

export function fetchDetailAPI(id) {
  return {
    actionType: [FETCH_DETAIL_API.request, FETCH_DETAIL_API.success, FETCH_DETAIL_API.error],
    shouldCallAPI: (state) => !state.products.detail[id] || state.products.detail[id].status != 'success',
    callAPI: () => fetch(`/api/products/${id}`),
    payload: {id}
  }
}
