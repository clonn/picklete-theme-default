// FETCH_DPTS_API
export const FETCH_API = {
  request: 'dpts.FETCH_API.request',
  success: 'dpts.FETCH_API.success',
  error: 'dpts.FETCH_API.error',
  end: 'dpts.FETCH_API.end'
};

export function fetchAPI() {
  return {
    actionType: [FETCH_API.request, FETCH_API.success, FETCH_API.error],
    shouldCallAPI: (state) => state.dpts.status != 'success',
    callAPI: () => fetch('/api/dpt')
  }
}
