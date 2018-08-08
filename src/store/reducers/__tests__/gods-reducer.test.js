import godsReducer from 'store/reducers/gods-reducer'
import * as actions from 'store/types'

let INITIAL_STATE

beforeEach(() => {
  INITIAL_STATE = {
    cacheList: {},
    searchList: [],
    errorMessage: null
  }
})

test('Handle action SET_GODS_LIST', () => {
  const data = 'any data'
  const data2 = 'another data'
  const action = {
    type: actions.SET_GODS_LIST,
    id: 1,
    data: data
  }

  const state = {
    ...INITIAL_STATE,
    cacheList: { 1: data }
  }

  const state2 = {
    ...INITIAL_STATE,
    cacheList: { 1: data2 }
  }

  const newState = godsReducer(INITIAL_STATE, action)
  expect(state).toEqual(newState)
  expect(state2).not.toEqual(newState)
})

test('Handle action SET_SEARCH_LIST', () => {
  const data = {
    data: 'any data'
  }

  const data2 = {
    data: 'another data'
  }

  const action = {
    type: actions.SET_SEARCH_LIST,
    data: data
  }

  const state = {
    ...INITIAL_STATE,
    searchList: data
  }

  const state2 = {
    ...INITIAL_STATE,
    searchList: data2
  }

  const newState = godsReducer(INITIAL_STATE, action)
  expect(state).toEqual(newState)
  expect(state2).not.toEqual(newState)
})

test('Handle action SET_ERROR_MESSAGE', () => {
  const msg = 'new message'

  const msg2 = 'another message'

  const action = {
    type: actions.SET_ERROR_MESSAGE,
    msg
  }

  const state = {
    ...INITIAL_STATE,
    errorMessage: msg
  }

  const state2 = {
    ...INITIAL_STATE,
    errorMessage: msg2
  }

  const newState = godsReducer(INITIAL_STATE, action)
  expect(state).toEqual(newState)
  expect(state2).not.toEqual(newState)
})
