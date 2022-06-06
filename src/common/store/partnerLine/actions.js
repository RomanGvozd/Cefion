export const ACTION_ADD_PARTNER_LINE = "ACTION_ADD_PARTNER_LINE";
export const ACTION_DELETE_PARTNER_LINE = "ACTION_DELETE_PARTNER_LINE";

export function addItem(title, descriptionRU, descriptionEN) {
  return {
    type: ACTION_ADD_PARTNER_LINE,
    payload: { title, descriptionRU, descriptionEN }
  };
}

export function deleteItem(id) {
  return {
    type: ACTION_DELETE_PARTNER_LINE,
    payload: id
  };
}