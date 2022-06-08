export const ACTION_ADD_NEWS_DRAFTS = "ACTION_ADD_NEWS_DRAFTS";
export const ACTION_DELETE_NEWS_DRAFTS = "ACTION_DELETE_NEWS_DRAFTS";
export const ACTION_EDIT_NEWS_DRAFTS = "ACTION_EDIT_NEWS_DRAFTS";

export function addItemDrafts(titleRU, titleEN, descriptionRU, descriptionEN) {
  return {
    type: ACTION_ADD_NEWS_DRAFTS,
    payload: { titleRU, titleEN, descriptionRU, descriptionEN }
  };
}

export function editItemDrafts(id, titleRU, titleEN, descriptionRU, descriptionEN) {
  return {
    type: ACTION_EDIT_NEWS_DRAFTS,
    payload: { id, titleRU, titleEN, descriptionRU, descriptionEN }
  };
}

export function deleteItem(id) {
  return {
    type: ACTION_DELETE_NEWS_DRAFTS,
    payload: id
  };
}