// LOAD_LOCAL_STORAGE
export const CHANGE_ACTIVE = 'modals.CHANGE_ACTIVE';

export function changeActive(modalType, value = 'toggle') {
  return {
    type: CHANGE_ACTIVE,
    payload: { modalType, value }
  }
}
