import React from 'react'
import { Provider } from 'react-redux'

import configureStore from 'store/configureStore'

export default ({ children, initialStore = {} }) => {
  const store = configureStore(initialStore)
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
