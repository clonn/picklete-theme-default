export const RENDER_COMPLETE = 'navs.RENDER_COMPLETE';

export function renderNavComplete({navType, items}) {
  window.navItems[navType] = items;
  return {
    type: RENDER_COMPLETE,
    payload: {navType}
  }
}
