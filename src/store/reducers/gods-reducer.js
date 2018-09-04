import * as actions from 'Store/types';

const INITIAL_STATE = {
  cacheList: {},
  searchList: [],
  errorMessage: null
};

const godsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.SET_GODS_LIST:
      return {
        ...state,
        cacheList: {
          ...state.cacheList,
          [`${action.id}`]: action.data
        }
      };
    case actions.SET_SEARCH_LIST:
      return {
        ...state,
        searchList: action.data
      };
    case actions.SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.msg
      };
    default:
      return state;
  }
};

export default godsReducer;
