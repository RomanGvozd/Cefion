export const ACTION_ADD_CURRENT_USER = "ACTION_ADD_CURRENT_USER";
export const ACTION_CHANGE_IS_LOGGED = "ACTION_CHANGE_IS_LOGGED";


export function addItem(username, tagName, roles) {
  return {
    type: ACTION_ADD_CURRENT_USER,
    payload: { username, tagName, roles }
  };
}

export function loggout() {
  return {
    type: ACTION_CHANGE_IS_LOGGED,
    payload: false
  };
}
export const loggin = ()=>{
  return {
    type: ACTION_CHANGE_IS_LOGGED,
    payload: true
  };
}


