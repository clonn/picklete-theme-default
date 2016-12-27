import createFetchActionType from 'generic/modules/createFetchActionType'
import { browserHistory } from 'react-router'

import { changeModalActive } from 'App/actions/ModalActions'
import { addNotification } from 'App/actions/NotificationActions'

export const FETCH_DATA = createFetchActionType('orders', 'FETCH_DATA');

export function fetchOrderData() {
  return {
    actionType: [FETCH_DATA.request, FETCH_DATA.success, FETCH_DATA.error],
    shouldCallAPI: () => Boolean(localStorage.token),
    callAPI: () => fetch('/api/orders', {
      headers: {
        'Authorization': `Bearer ${localStorage.token}`
      }
    })
  }
}
