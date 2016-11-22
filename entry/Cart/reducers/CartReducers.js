import { LOAD_LOCAL_STORAGE, ADD_ITEM, REMOVE_ITEM, CHANGE_ITEM_QTY } from 'Cart/actions/CartActions'

const initialState = {
  totalPrice: 0,
  data: []
};

export default function cart(state = initialState, {type, payload}) {
  switch (type) {
    case LOAD_LOCAL_STORAGE:
      return _.merge({}, state, {
        totalPrice: payload.totalPrice,
        data: payload.data,
      });
    case ADD_ITEM:
      return {
        totalPrice: state.totalPrice + (payload.item.price * payload.item.quantity),
        data: state.data.concat(payload.item)
      };
    case REMOVE_ITEM:
      return {
        totalPrice: state.totalPrice - (state.data[payload.index].price * state.data[payload.index].quantity),
        data: [
          ...state.data.slice(0, payload.index),
          ...state.data.slice(payload.index + 1, state.data.length)
        ]
      };
    case CHANGE_ITEM_QTY:
      let newData = _.cloneDeep(state.data);
      newData[payload.index].quantity = payload.quantity;
      return {
        totalPrice: payload.totalPrice,
        data: newData
      };
    default:
      return state;
  }
}
