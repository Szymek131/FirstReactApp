// actions
const createActionName = actionName => `app/searchInput/${actionName}`;
const CHANGE_SEARCH_INPUT = createActionName('CHANGE_SEARCH_INPUT');

// action creators
export const changeSearchInput = payload => ({ type: CHANGE_SEARCH_INPUT, payload });


const searchInputReducer = (statePart = '', action) => {
  switch(action.type) {
    case CHANGE_SEARCH_INPUT:
      return action.payload
    default:
      return statePart;
  }
}

export default searchInputReducer;