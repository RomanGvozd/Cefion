export const ACTION_ADD_MEDIA = "ACTION_ADD_MEDIA";
export const ACTION_DELETE_MEDIA = "ACTION_DELETE_MEDIA";

export function addItem(titleRU, titleEN, descriptionRU, descriptionEN) {
  return {
    type: ACTION_ADD_MEDIA,
    payload: { titleRU, titleEN, descriptionRU, descriptionEN }
  };
}

export function deleteItem(id) {
  return {
    type: ACTION_DELETE_MEDIA,
    payload: id
  };
}