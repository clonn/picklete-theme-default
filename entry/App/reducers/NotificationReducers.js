import { ADD, ACTIVATE } from 'App/actions/NotificationActions'

const initialState = {
  activeItems: [],
  newItem: null
};

export default function notifications(state = initialState, {type, payload = {}}) {
  switch (type) {
    case ADD:
      return {
        ...state,
        newItem: payload
      };
    case ACTIVATE:
      return {
        newItem: null,
        activeItems: [
          ...state.activeItems,
          state.newItem
        ]
      };
    default:
      return state;
  }
}
