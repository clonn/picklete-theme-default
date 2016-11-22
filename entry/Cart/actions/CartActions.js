// LOAD_LOCAL_STORAGE
export const LOAD_LOCAL_STORAGE = 'cart.LOAD_LOCAL_STORAGE';
export const ADD_ITEM = 'cart.ADD_ITEM';
export const REMOVE_ITEM = 'cart.REMOVE_ITEM';
export const CHANGE_ITEM_QTY = 'cart.CHANGE_ITEM_QTY';

export function loadLocalStorage() {
  if (!localStorage.cart) {
    localStorage.cart = JSON.stringify({
      totalPrice: 0,
      data: []
    })
  }

  return {
    type: LOAD_LOCAL_STORAGE,
    payload: JSON.parse(localStorage.cart)
  }
}

export function addItem(item) {
  const cart = JSON.parse(localStorage.cart);
  localStorage.cart = JSON.stringify({
    totalPrice: cart.totalPrice + (item.price * item.quantity),
    data: cart.data.concat(item)
  });

  return {
    type: ADD_ITEM,
    payload: {item}
  }
}

export function removeItem(index) {
  const cart = JSON.parse(localStorage.cart);
  cart.totalPrice -= cart.data[index].price * cart.data[index].quantity;
  cart.data.splice(index, 1);
  localStorage.cart = JSON.stringify(cart);

  return {
    type: REMOVE_ITEM,
    payload: {index}
  }
}

export function changeItemQuantity(index, quantity) {
  const cart = JSON.parse(localStorage.cart);
  cart.data[index].quantity = quantity;
  cart.totalPrice = 0
  cart.data.forEach((item) => {
    cart.totalPrice += item.price * item.quantity;
  })
  localStorage.cart = JSON.stringify(cart);

  return {
    type: CHANGE_ITEM_QTY,
    payload: {index, quantity, totalPrice: cart.totalPrice}
  }
}
