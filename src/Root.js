import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import configureStore from 'Store/configureStore';

const Root = ({ children, initialStore = {} }) => {
  const store = configureStore(initialStore);
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

Root.defaultProps = {
  children: null,
  initialStore: {}
};

Root.propTypes = {
  children: PropTypes.object,
  initialStore: PropTypes.object
};

export default Root;
