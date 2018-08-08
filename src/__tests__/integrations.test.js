import React from 'react'
import { mount } from 'enzyme'
import moxios from 'moxios'

import Root from '../Root'
import App from 'components/App'

let wrapped

beforeEach(() => {
  moxios.install()
  wrapped = mount(<Root><App /></Root>)
})

afterEach(() => {
  moxios.uninstall()
  wrapped.unmount()
})

test('can fetch a list of gods and list them when searching', (done) => {
  const url = 'https://athena-7.herokuapp.com/ancients.json?search=u'
  const response = {
    ancients: [
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
    ]
  }
  moxios.stubRequest(url, {
    status: 200,
    response
  })
  const newSearch = 'u'
  const value = {
    target: { value: newSearch }
  }

  wrapped.find('input').simulate('change', value)

  moxios.wait(() => {
    wrapped.update()
    expect(wrapped.find('li').length).toEqual(2)
    done()
  })
})
