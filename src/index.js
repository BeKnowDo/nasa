import React from 'react'
import ReactDOM from 'react-dom'
import { injectGlobal } from 'styled-components'
import { Provider } from 'react-redux'

import Master from './layout/master'
import storeConfig from './store'

const store = storeConfig().store

injectGlobal`
    body {
      font-family: 'Muli', 'Roboto', Helvetica, Arial, sans-serif;
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
    h1, h2, h3, h4, h5, h6 { margin: 0; padding: 0; }
    img { max-width: 100%; }
`

ReactDOM.render(
  <Provider store={store}>
    <Master />
  </Provider>
  ,
  document.getElementById('root')
)
