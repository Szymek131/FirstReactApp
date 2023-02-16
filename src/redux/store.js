import { createStore } from 'redux';
import initialState from './initialState';
import { doesContain } from '../utils/strContains';
import shortid from 'shortid';

export const getFilteredCards = ({ cards, searchInput }, columnId) => cards
  .filter(card => card.columnId === columnId && doesContain(card.title, searchInput));

export const getAllColumns = state => state.columns;

export const getAllLists = state => state.lists;

export const getColumnsByList = ({ columns }, listId) => columns.filter(column => column.listId === listId);

export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);

export const getFavoriteCards = ({ cards }) => cards.filter(card => card.isFavorite === true);

export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });

export const addCard = payload => ({ type: 'ADD_CARD', payload });

export const changeSearchInput = payload => ({ type: 'CHANGE_SEARCH_INPUT', payload });

export const addList = payload => ({ type: 'ADD_LIST', payload });

export const toggleCardFavorite = payload => ({ type: 'TOGGLE_CARD_FAVORITE', payload})

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, { id: shortid(), ...action.payload }] };
    case 'ADD_CARD':
      return { ...state, cards: [...state.cards, { id: shortid(), ...action.payload }] };
    case 'CHANGE_SEARCH_INPUT':
      return { ...state, searchInput: action.payload };
    case 'ADD_LIST':
      return { ...state, lists: [...state.lists, { id: shortid(), ...action.payload }] };
    case 'TOGGLE_CARD_FAVORITE':
      return { ...state, cards: state.cards.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card) };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;