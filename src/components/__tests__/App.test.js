import React from 'react'
import { mount } from 'enzyme'

import Root from '../../Root'
import App from 'components/App'
import SearchBox from 'components/SearchBox'
import GodsList from 'components/GodsList'

let wrapped

beforeEach(() => {
  wrapped = mount(<Root><App /></Root>)
})

afterEach(() => {
  wrapped.unmount()
})

test('Has a SearchBox component', () => {
  expect(wrapped.find(SearchBox).length).toEqual(1)
})

test('Has a GodsList component', () => {
  expect(wrapped.find(GodsList).length).toEqual(1)
})
