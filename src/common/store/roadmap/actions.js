export const ACTION_ADD_ROADMAP = "ACTION_ADD_ROADMAP";
export const ACTION_DELETE_ROADMAP = "ACTION_DELETE_ROADMAP";

export function addItem(title, descriptionRU, descriptionEN) {
  return {
    type: ACTION_ADD_ROADMAP,
    payload: { title, descriptionRU, descriptionEN }
  };
}

export function deleteItem(id) {
  return {
    type: ACTION_DELETE_ROADMAP,
    payload: id
  };
}