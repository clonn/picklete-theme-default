// FETCH_PRODUCTS_LIST_API
export const FETCH_PRODUCTS_LIST_API = {
  request: 'shop.FETCH_PRODUCTS_LIST_API.request',
  success: 'shop.FETCH_PRODUCTS_LIST_API.success',
  error: 'shop.FETCH_PRODUCTS_LIST_API.error',
  end: 'shop.FETCH_PRODUCTS_LIST_API.end'
};

export function fetchProductListAPI() {
  return {
    actionType: [FETCH_PRODUCTS_LIST_API.request, FETCH_PRODUCTS_LIST_API.success, FETCH_PRODUCTS_LIST_API.error],
    shouldCallAPI: (state) => state.products.list.status != 'success',
    callAPI: () => fetch('/api/products')
  }
}
