import basicFormSubmit from 'generic/modules/basicFormSubmit'

import createFetchActionType from 'generic/modules/createFetchActionType'
import { addNotification } from 'App/actions/NotificationActions'
import { cleanCart } from 'Cart/actions/CartActions'

export const CHECKOUT = createFetchActionType('order', 'CHECKOUT');

export function checkout(data) {
  const { shipment, user, paymentMethod } = data;
  localStorage.checkout = JSON.stringify({
    cart: JSON.parse(localStorage.cart),
    shippingFee: 70,
    order: { paymentMethod },
    user: {
      name: user.username,
      mobile: user.mobile,
      shippingAddress: `${shipment.zipcode} ${shipment.city}${shipment.region}${shipment.address}`
    }
  });

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

export const GET_SHIPPING_FEE = createFetchActionType('checkout', 'GET_SHIPPING_FEE');
export function getShippingFee() {
  return {
    actionType: [GET_SHIPPING_FEE.request, GET_SHIPPING_FEE.success, GET_SHIPPING_FEE.error],
    callAPI: () => fetch('/api/indexInfos'),
    handleResponse: async (httpResponse) => (await httpResponse.json()).shippings[0]
  }
}
