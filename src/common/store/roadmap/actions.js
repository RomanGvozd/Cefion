export const ACTION_ADD = "ACTION_ADD";
export const ACTION_DELETE = "ACTION_DELETE";

export function addItem(title, descriptionRU, descriptionEN) {
  return {
    type: ACTION_ADD,
    payload: { title, descriptionRU, descriptionEN }
  };
}

export function deleteItem(id) {
  return {
    type: ACTION_DELETE,
    payload: id
  };
}