import { createStore, combineReducers  } from 'redux';
import initialState from './initialState';
import listsReducer from './listsRedux'
import columnsReducer from './columnsRedux';
import cardsReducer from './cardsRedux';
import searchInputReducer from './searchInputRedux';

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchInput: searchInputReducer
};

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;