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
