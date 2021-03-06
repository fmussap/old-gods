import axios from 'axios';
import * as actions from 'Store/types';

export const setSearchList = (data) => {
  return {
    type: actions.SET_SEARCH_LIST,
    data
  };
};

export const setGodsList = (id, data) => {
  return {
    type: actions.SET_GODS_LIST,
    id,
    data
  };
};

export const setErrorMessage = (msg) => {
  return {
    type: actions.SET_ERROR_MESSAGE,
    msg
  };
};

export const getListGods = (searchText, errorMessage) => {
  return async (dispatch) => {
    try {
      const url = 'https://athena-7.herokuapp.com/ancients.json';
      if (searchText) {
        const response = await axios.get(url, { params: { search: searchText } });
        const { data } = response;

        if (data.ancients) {
          dispatch(setSearchList(data.ancients));
          dispatch(setGodsList(searchText, data.ancients));
        }
      } else {
        const response = await axios.get(url);
        const { data } = response;

        if (data) {
          dispatch(setSearchList(data));
          dispatch(setGodsList('all', data));
        }

        if (errorMessage) {
          await axios.get(url, { params: { error: true } });
        }
      }
    } catch (error) {
      // console.log('error', error)
      const { response } = error;
      if (response && response.status === 422) {
        const { data } = response;
        const message = data.error;
        if (message) {
          dispatch(setErrorMessage(message));
        }
      }
    }
  };
};
