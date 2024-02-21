import { createContext, useReducer } from 'react';
import globalReducer from './globalReducer';

// for creating a functional Context wrapper for states

const initDefault = {
  userID: null,
  userList: [],
  viewMode: 'landing',
  termID: null,
};

// useContext init
export const GLOBALContext = createContext();

export function GLOBALContextProvider({ children }) {
  const [state, dispatch] = useReducer(globalReducer, initDefault);
  return (
    <GLOBALContext.Provider value={{ state: state, dispatch: dispatch }}>
      {children}
    </GLOBALContext.Provider>
  );
}
