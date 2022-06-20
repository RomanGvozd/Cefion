import axios from 'axios';

export const ACTION_ADD_USER = "ACTION_ADD_USER";
export const ACTION_DELETE_USER = "ACTION_DELETE_USER";
export const ACTION_GET_USERS = "ACTION_GET_USERS";

export const getUsers = () => {

  return dispatch => {
    axios.get('/api/roles/page/1')
      .then(res => {
         dispatch(setUsers(res.data));
      })
      
  };
};

export function setUsers(users) {
  return {
    type: ACTION_GET_USERS,
    payload: users
  };
}

export function addItem(name, tegName, password, roles) {
  return {
    type: ACTION_ADD_USER,
    payload: { name, tegName, password, roles }
  };
}

export function deleteItem(id) {
  return {
    type: ACTION_DELETE_USER,
    payload: id
  };
}

