import React from 'react';
import { mount } from 'enzyme';

import App from 'Components/App';
import SearchBox from 'Components/SearchBox';
import GodsList from 'Components/GodsList';
import Root from '../../Root';

let wrapped;

beforeEach(() => {
  wrapped = mount(<Root><App /></Root>);
});

afterEach(() => {
  wrapped.unmount();
});

test('Has a SearchBox component', () => {
  expect(wrapped.find(SearchBox).length).toEqual(1);
});

test('Has a GodsList component', () => {
  expect(wrapped.find(GodsList).length).toEqual(1);
});
