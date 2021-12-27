import React from 'react'
import { render } from 'react-dom'
import App from './components/App'

// Import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

render(
  <App />,
  document.getElementById('app')
)
