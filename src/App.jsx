import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import RouterMap from './router'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterMap></RouterMap>
      </Provider>
    )
  }
}

export default App