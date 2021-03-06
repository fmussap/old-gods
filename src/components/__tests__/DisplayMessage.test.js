import React from 'react';
import { shallow } from 'enzyme';

import DisplayMessage from 'Components/DisplayMessage';

let wrapped;
const message = 'New Message';
const message2 = 'wrong message';

beforeEach(() => {
  wrapped = shallow(<DisplayMessage message={message} />);
});

test('Has a message', () => {
  expect(wrapped.render().text()).toContain(message);
  expect(wrapped.render().text()).not.toContain(message2);
});
