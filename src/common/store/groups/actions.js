export const ACTION_ADD_GROUPS = "ACTION_ADD_GROUPS";
export const ACTION_DELETE_GROUPS = "ACTION_DELETE_GROUPS";

export function addItem(title, description) {
  return {
    type: ACTION_ADD_GROUPS,
    payload: { title, description }
  };
}

export function deleteItem(id) {
  return {
    type: ACTION_DELETE_GROUPS,
    payload: id
  };
}

