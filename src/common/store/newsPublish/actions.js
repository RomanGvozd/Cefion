export const ACTION_ADD_NEWS_PUBLISH = "ACTION_ADD_NEWS_PUBLISH";
export const ACTION_DELETE_NEWS_PUBLISH = "ACTION_DELETE_NEWS_PUBLISH";
export const ACTION_EDIT_NEWS_PUBLISH = "ACTION_EDIT_NEWS_PUBLISH";
export const ACTION_GET_NEWS = "ACTION_GET_NEWS";

export function getNews(news) {
  return {
    type: ACTION_GET_NEWS,
    payload: news
  };
}

export function addItemPublish(titleRU, titleEN, descriptionRU, descriptionEN, author, date, type, hashtags) {
  return {
    type: ACTION_ADD_NEWS_PUBLISH,
    payload: { titleRU, titleEN, descriptionRU, descriptionEN, author, date, type, hashtags}
  };
}

export function editItemPublish(id, titleRU, titleEN, descriptionRU, descriptionEN, type, hashtags) {
  return {
    type: ACTION_EDIT_NEWS_PUBLISH,
    payload: { id, titleRU, titleEN, descriptionRU, descriptionEN, type, hashtags }
  };
}

export function deleteItem(id) {
  return {
    type: ACTION_DELETE_NEWS_PUBLISH,
    payload: id
  };
}