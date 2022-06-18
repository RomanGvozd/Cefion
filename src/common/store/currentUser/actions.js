export const ACTION_ADD_CURRENT_USER = "ACTION_ADD_CURRENT_USER";

export function addItem(username, tagName, roles) {
  return {
    type: ACTION_ADD_CURRENT_USER,
    payload: { username, tagName, roles }
  };
}

