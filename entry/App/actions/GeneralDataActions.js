// FETCH_COMPANY_API
export const FETCH_COMPANY_API = {
  request: 'company.FETCH_API.request',
  success: 'company.FETCH_API.success',
  error: 'company.FETCH_API.error'
};

export function fetchCompanyAPI() {
  return {
    actionType: [FETCH_COMPANY_API.request, FETCH_COMPANY_API.success, FETCH_COMPANY_API.error],
    shouldCallAPI: (state) => state.company.status != 'success',
    callAPI: () => fetch('/api/company')
  }
}