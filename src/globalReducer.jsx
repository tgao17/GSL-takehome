import { useReducer, createContext } from 'react';

/**
 * This is a useReducer master style file for all the views I want. It is used together with the useContext in order to serve as a "redux master," which is really good for smaller projects
 * Using vanila JS instead of Typescript for speed.
 */
const SET_USER_ID = 'SET_USER_ID';
const SET_USER_LIST = 'SET_USER_LIST';
const SET_VIEW_MODE = 'SET_VIEW_MODE';
const SET_TERM_ID = 'SET_TERM_ID';

function globalReducer(state, action) {
  switch (action.type) {
    case SET_USER_ID:
      return { ...state, userID: action.payload };
    case SET_USER_LIST:
      return { ...state, userList: action.payload };
    case SET_VIEW_MODE:
      return { ...state, viewMode: action.payload };
    case SET_TERM_ID:
      return { ...state, termID: action.payload };
    default:
      return state;
  }
}

export default globalReducer;
