import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.jsx'

import Grail from './components/Grail.jsx'

import Footer from './components/Footer.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Grail/>
  
    <Footer/>
  </React.StrictMode>,
)
s