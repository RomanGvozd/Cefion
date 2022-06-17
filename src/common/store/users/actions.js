export const ACTION_ADD_USER = "ACTION_ADD_USER";
export const ACTION_DELETE_USER = "ACTION_DELETE_USER";

export function addItem(name, tegName, password, roles) {
  return {
    type: ACTION_ADD_USER,
    payload: { name, tegName, password, roles }
  };
}

export function deleteItem(id) {
  return {
    type: ACTION_DELETE_USER,
    payload: id
  };
}

