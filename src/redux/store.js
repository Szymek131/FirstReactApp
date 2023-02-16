import { createStore, combineReducers  } from 'redux';
import { doesContain } from '../utils/strContains';
import initialState from './initialState';
import listsReducer from './listsRedux'
import columnsReducer from './columnsRedux';
import cardsReducer from './cardsRedux';
import searchInputReducer from './searchInputRedux';

export const getFilteredCards = ({ cards, searchInput }, columnId) => cards
  .filter(card => card.columnId === columnId && doesContain(card.title, searchInput));

export const getAllColumns = state => state.columns;

export const getColumnsByList = ({ columns }, listId) => columns.filter(column => column.listId === listId);

export const getFavoriteCards = ({ cards }) => cards.filter(card => card.isFavorite === true);

export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });

export const addCard = payload => ({ type: 'ADD_CARD', payload });

export const changeSearchInput = payload => ({ type: 'CHANGE_SEARCH_INPUT', payload });

export const toggleCardFavorite = payload => ({ type: 'TOGGLE_CARD_FAVORITE', payload})




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