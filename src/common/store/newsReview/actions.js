export const ACTION_ADD_NEWS_REVIEW = "ACTION_ADD_NEWS_REVIEW";
export const ACTION_DELETE_NEWS_REVIEW = "ACTION_DELETE_NEWS_REVIEW";
export const ACTION_EDIT_NEWS_REVIEW = "ACTION_EDIT_NEWS_REVIEW";

export function addItemReview(titleRU, titleEN, descriptionRU, descriptionEN, date, type, hashtags) {
  return {
    type: ACTION_ADD_NEWS_REVIEW,
    payload: { titleRU, titleEN, descriptionRU, descriptionEN, date, type, hashtags}
  };
}

export function editItemReview(id, titleRU, titleEN, descriptionRU, descriptionEN) {
  return {
    type: ACTION_EDIT_NEWS_REVIEW,
    payload: { id, titleRU, titleEN, descriptionRU, descriptionEN }
  };
}

export function deleteItem(id) {
  return {
    type: ACTION_DELETE_NEWS_REVIEW,
    payload: id
  };
}