import { createStore } from 'redux';
import { reducer } from './reducer.js';

const STORAGE_KEY = '_rms_app_'; // save the all state in local storage when application is offline  whith that key 

const saveState = state => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

const loadState = () => {
  const json = localStorage.getItem(STORAGE_KEY);
  return json ? JSON.parse(json) : undefined;
};



export const store = createStore(
  reducer,
  loadState(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
);

store.subscribe(() => {
    saveState(store.getState());
  });
