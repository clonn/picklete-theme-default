export const ADD = 'notifications.ADD';
export const ACTIVATE = 'notifications.ACTIVATE';
export const DISSMISS = 'notifications.DISSMISS';

export function addNotification(options) {
  const {
    type = 'success',
    position = 'br',
    title = '',
    message,
    uid, 
    autoDismiss = 5
  } = options;

  return {
    type: ADD,
    payload: {
      title,
      message,
      level: type,
      position,
      autoDismiss
    }
  };
}

export function activateNotification() {
  return {
    type: ACTIVATE
  };
}

export function dismissNotification(index) {
  return {
    type: DISSMISS,
    payload: { index }
  };
}
