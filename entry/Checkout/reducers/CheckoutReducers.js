import { GET_SHIPPING_FEE } from 'Checkout/actions/CheckoutActions'

const initialState = {
  shippingFee: {}
};

export default function checkout(state = initialState, {type, payload}) {
  switch (type) {
    case GET_SHIPPING_FEE.success:
      return {
        shippingFee: payload.response
      }
    default:
      return state;
  }
}
