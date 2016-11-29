export const CHANGE_ACTIVE = 'modals.CHANGE_ACTIVE';

export function changeModalActive(modalType, value = 'toggle') {
  return {
    type: CHANGE_ACTIVE,
    payload: { modalType, value }
  }
}
