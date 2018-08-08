import React from 'react'
import { shallow } from 'enzyme'

import GodsList from 'components/GodsList'

let wrapped
const data = [{ name: 'God1', superpower: 'any' }, { name: 'God2', superpower: 'any' }, { name: 'God3', superpower: 'any' }]

beforeEach(() => {
  wrapped = shallow(<GodsList data={data} />)
})

test('Has 3 li element', () => {
  expect(wrapped.find('li').length).toEqual(3)
  expect(wrapped.find('li').length).not.toEqual(1)
})

test('It row shows the right text', () => {
  expect(wrapped.render().text()).toContain(data[0].name)
  expect(wrapped.render().text()).toContain(data[1].name)
  expect(wrapped.render().text()).toContain(data[2].name)
  expect(wrapped.render().text()).not.toContain('God4')
})
