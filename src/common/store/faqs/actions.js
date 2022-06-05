export const ACTION_ADD_FAQS = "ACTION_ADD_FAQS";
export const ACTION_DELETE_FAQS = "ACTION_DELETE_FAQS";
export const ACTION_SHOW_FAQS = "ACTION_SHOW_FAQS";

export function addItem(titleRU, titleEN, descriptionRU, descriptionEN) {
  return {
    type: ACTION_ADD_FAQS,
    payload: { titleRU, titleEN, descriptionRU, descriptionEN }
  };
}

export function deleteItem(id) {
  return {
    type: ACTION_DELETE_FAQS,
    payload: id
  };
}

export function showItem(id) {
  return {
    type: ACTION_SHOW_FAQS,
    payload: id
  };
}