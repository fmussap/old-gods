import React from 'react';
import ReactDOM from 'react-dom';

import App from 'Components/App';
import Root from './Root';

const jsx = (
  <Root>
    <App />
  </Root>
);

ReactDOM.render(jsx, document.querySelector('#root'));
