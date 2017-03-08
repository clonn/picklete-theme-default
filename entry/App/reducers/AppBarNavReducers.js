import {RENDER_COMPLETE} from 'App/actions/AppBarNavAction'

const initialState = {
  shop: false,
  member: false
};

window.navItems = {
  shop: [],
  member: []
};
export default function navs(state = initialState, {type, payload}) {
  switch (type) {
    case RENDER_COMPLETE:
      return {
        [payload.navType]: true
      }
    default:
      return state;
  }
}
