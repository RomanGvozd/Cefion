export const ACTION_ADD_NEWS_PUBLISH = "ACTION_ADD_NEWS_PUBLISH";
export const ACTION_DELETE_NEWS_PUBLISH = "ACTION_DELETE_NEWS_PUBLISH";
export const ACTION_EDIT_NEWS_PUBLISH = "ACTION_EDIT_NEWS_PUBLISH";

export function addItemPublish(titleRU, titleEN, descriptionRU, descriptionEN) {
  return {
    type: ACTION_ADD_NEWS_PUBLISH,
    payload: { titleRU, titleEN, descriptionRU, descriptionEN }
  };
}

export function editItemPublish(id, titleRU, titleEN, descriptionRU, descriptionEN) {
  return {
    type: ACTION_EDIT_NEWS_PUBLISH,
    payload: { id, titleRU, titleEN, descriptionRU, descriptionEN }
  };
}

export function deleteItem(id) {
  return {
    type: ACTION_DELETE_NEWS_PUBLISH,
    payload: id
  };
}