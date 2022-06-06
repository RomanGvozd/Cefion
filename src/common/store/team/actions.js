export const ACTION_ADD_USER_TEAM = "ACTION_ADD_USER_TEAM";
export const ACTION_DELETE_USER_TEAM = "ACTION_DELETE_USER_TEAM";

export function addItem(nameRU, nameEN, specialization) {
  return {
    type: ACTION_ADD_USER_TEAM,
    payload: { nameRU, nameEN, specialization }
  };
}

export function deleteItem(id) {
  return {
    type: ACTION_DELETE_USER_TEAM,
    payload: id
  };
}