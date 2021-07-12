import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from '../components/app'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <router>
      <Route path="/" component={App}/>
    </router>,
    document.body.appendChild(document.createElement('div')),
  )
})
