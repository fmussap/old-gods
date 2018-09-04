import React from 'react';
import { mount } from 'enzyme';

import SearchBox from 'Components/SearchBox';

let wrapped;

beforeEach(() => {
  wrapped = mount(<SearchBox handleSearch={() => null} />);
});

afterEach(() => {
  wrapped.unmount();
});

test('Has a input element', () => {
  expect(wrapped.find('input').length).toEqual(1);
});

test('A new input value changes state', () => {
  const newSearch = 'new search';
  const newSearch2 = 'new search 2';
  const value = {
    target: { value: newSearch }
  };
  wrapped.find('input').simulate('change', value);
  wrapped.update();
  expect(wrapped.find('input').prop('value')).toEqual(newSearch);
  expect(wrapped.state('search')).toEqual(newSearch);
  expect(wrapped.state('search')).not.toEqual(newSearch2);
});
