import url from 'url'
import queryString from 'query-string'

import basicFormSubmit from 'generic/modules/basicFormSubmit'

import createFetchActionType from 'generic/modules/createFetchActionType'
import { addNotification } from 'App/actions/NotificationActions'
import { cleanCart } from 'Cart/actions/CartActions'

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
      // dispatch(cleanCart());
      // console.log(response);
      // //
      const query = url.parse(response.allPayData.ClientBackURL, true).query;
      response.allPayData.ClientBackURL = `${APP_DOMIAN}/checkout/complete/?${queryString.stringify(query)}`;
      console.log(response);

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
