import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import searchImgs from './api'

searchImgs()
const el = document.getElementById('root')
const root = ReactDOM.createRoot(el)

root.render(<App />)
