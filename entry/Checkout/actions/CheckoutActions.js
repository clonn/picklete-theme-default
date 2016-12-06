import basicFormSubmit from 'generic/modules/basicFormSubmit'

import createFetchActionType from 'generic/modules/createFetchActionType'
import { addNotification } from 'App/actions/NotificationActions'

export const CHECKOUT = createFetchActionType('order', 'CHECKOUT');

export function checkout(data) {
  return {
    actionType: [CHECKOUT.request, CHECKOUT.success, CHECKOUT.error],
    callAPI: () => fetch('/api/orders', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Authorization': `Bearer ${localStorage.token}`
      }
    }),
    afterSuccess: ({dispatch, response}) => {
      basicFormSubmit({
        method: 'POST',
        action: response.AioCheckOut,
        formData: response.allPayData
      });
    },
    afterError: ({dispatch, httpResponse}) => {
      console.log(httpResponse);
    }
  };
}
