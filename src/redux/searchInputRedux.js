const searchInputReducer = (statePart = '', action) => {
  switch(action.type) {
    case 'CHANGE_SEARCH_INPUT':
      return action.payload
    default:
      return statePart;
  }
}

export default searchInputReducer;