import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import * as actions from 'Store/types';
import {
  getListGods, setErrorMessage, setGodsList, setSearchList
} from 'Store/actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('setGodsList', () => {
  test('has the correct type', () => {
    const action = setGodsList();
    expect(action.type).toEqual(actions.SET_GODS_LIST);
    expect(action.type).not.toEqual(actions.SET_SEARCH_LIST);
  });

  test('has the correct payload', () => {
    const data1 = 'new data';
    const data2 = 'another data';
    const id = 1;
    const action = setGodsList(id, data1);

    expect(action.data).toEqual(data1);
    expect(action.data).not.toEqual(data2);
  });
});

describe('setSearchList', () => {
  test('has the correct type', () => {
    const action = setSearchList();
    expect(action.type).toEqual(actions.SET_SEARCH_LIST);
    expect(action.type).not.toEqual(actions.SET_GODS_LIST);
  });

  test('has the correct payload', () => {
    const data1 = 'new data';
    const data2 = 'another data';
    const action = setSearchList(data1);

    expect(action.data).toEqual(data1);
    expect(action.data).not.toEqual(data2);
  });
});

describe('setErrorMessage', () => {
  test('has the correct type', () => {
    const action = setErrorMessage();
    expect(action.type).toEqual(actions.SET_ERROR_MESSAGE);
    expect(action.type).not.toEqual(actions.SET_GODS_LIST);
  });

  test('has the correct payload', () => {
    const data1 = 'new message';
    const data2 = 'another message';
    const action = setErrorMessage(data1);

    expect(action.msg).toEqual(data1);
    expect(action.msg).not.toEqual(data2);
  });
});

describe('getListGods', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });
  test('getListGods with no param', () => {
    const response = [
      {
        name: 'Zeus',
        superpower: 'Unbeatable',
        end_of_an_era: '1014-11-17T00:00:00.000+00:00'
      },
      {
        name: 'Neptune',
        superpower: 'Water',
        end_of_an_era: '3014-07-08T00:00:00.000+00:00'
      }
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response
      });
    });

    const expectedActions = [
      {
        type: 'SET_SEARCH_LIST',
        data:
          [
            {
              name: 'Zeus',
              superpower: 'Unbeatable',
              end_of_an_era: '1014-11-17T00:00:00.000+00:00'
            },
            {
              name: 'Neptune',
              superpower: 'Water',
              end_of_an_era: '3014-07-08T00:00:00.000+00:00'
            }]
      },
      {
        type: 'SET_GODS_LIST',
        id: 'all',
        data:
          [
            {
              name: 'Zeus',
              superpower: 'Unbeatable',
              end_of_an_era: '1014-11-17T00:00:00.000+00:00'
            },
            {
              name: 'Neptune',
              superpower: 'Water',
              end_of_an_era: '3014-07-08T00:00:00.000+00:00'
            }]
      }
    ];

    const store = mockStore({ });
    return store.dispatch(getListGods()).then(() => {
      // return of async actions
      // console.log('action0', store.getActions()[0])
      // console.log('action1', store.getActions()[1])
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('getListGods searching for "a"', () => {
    const response = {
      ancients: [
        {
          name: 'Athena',
          superpower: 'Wisdom',
          end_of_an_era: '0012-10-10T00:00:00.000+00:00'
        }
      ]
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response
      });
    });

    const expectedActions = [
      {
        type: 'SET_SEARCH_LIST',
        data:
       [{
         name: 'Athena',
         superpower: 'Wisdom',
         end_of_an_era: '0012-10-10T00:00:00.000+00:00'
       }]
      },
      {
        type: 'SET_GODS_LIST',
        id: 'a',
        data:
          [{
            name: 'Athena',
            superpower: 'Wisdom',
            end_of_an_era: '0012-10-10T00:00:00.000+00:00'
          }]
      }
    ];

    const store = mockStore({ });
    return store.dispatch(getListGods('a')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('getListGods get the error message', () => {
    const response = {
      error: 'Oops! Display this error to win your freedom!'
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 422,
        response
      });
    });

    const expectedActions = [{ msg: 'Oops! Display this error to win your freedom!', type: 'SET_ERROR_MESSAGE' }];

    const store = mockStore({ });
    return store.dispatch(getListGods(null, 'errorMessage')).then(async () => {
      const getActions = await store.getActions();
      expect(getActions).toEqual(expectedActions);
    });
  });
});
