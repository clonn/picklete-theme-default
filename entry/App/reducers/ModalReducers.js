import { CHANGE_ACTIVE } from 'App/actions/ModalActions'

const initialState = {
  login: false,
  terms: false
};

export default function modals(state = initialState, {type, payload}) {
  switch (type) {
    case CHANGE_ACTIVE:
      return {
        ...state,
        [payload.modalType]: (payload.value == 'toggle')? !state[payload.modalType] : payload.value
      };
    default:
      return state;
  }
}
