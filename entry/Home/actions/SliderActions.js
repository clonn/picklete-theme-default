// FETCH_API
export const FETCH_API = {
  request: 'slides.FETCH_API.request',
  success: 'slides.FETCH_API.success',
  error: 'slides.FETCH_API.error'
};

export function fetchSlidesAPI() {
  return {
    actionType: [FETCH_API.request, FETCH_API.success, FETCH_API.error],
    shouldCallAPI: (state) => state.slides.status != 'success',
    callAPI: () => fetch('/api/slideshow')
  }
}