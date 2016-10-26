// FETCH_DPTS_API
export const FETCH_DPTS_API = {
  request: 'shop.FETCH_DPTS_API.request',
  success: 'shop.FETCH_DPTS_API.success',
  error: 'shop.FETCH_DPTS_API.error',
  end: 'shop.FETCH_DPTS_API.end'
};

export function fetchDptsAPI() {
  return {
    actionType: [FETCH_DPTS_API.request, FETCH_DPTS_API.success, FETCH_DPTS_API.error],
    shouldCallAPI: (state) => state.dpts.status != 'success',
    callAPI: () => fetch('/api/dpt')
  }
}
//
// // FETCH_PRODUCT_API
// export const FETCH_PRODUCT_API = {
//   request: 'shop.FETCH_PRODUCT_API.request',
//   success: 'shop.FETCH_PRODUCT_API.success',
//   error: 'shop.FETCH_PRODUCT_API.error'
// };
//
// export function fetchProductAPI(id) {
//   return {
//     actionType: [FETCH_PRODUCT_API.request, FETCH_PRODUCT_API.success, FETCH_PRODUCT_API.error],
//     shouldCallAPI: (state) => !state.shop.products[id] || state.shop.products[id].status != 'success',
//     callAPI: () => fetch(`/api/products/${id}`),
//     payload: {id}
//   };
// }
//
// // DPTS_SCROLL_TOP
// export const DPTS_SCROLL_TOP = {
//   save: 'shop.DPTS_SCROLL_TOP.save',
//   reset: 'shop.DPTS_SCROLL_TOP.reset'
// };
//
// export function saveDptsScrollTop(scrollTop) {
//   return { type: DPTS_SCROLL_TOP.save, payload: {scrollTop} };
// }
//
// export function resetDptsScrollTop() {
//   return { type: DPTS_SCROLL_TOP.reset };
// }
