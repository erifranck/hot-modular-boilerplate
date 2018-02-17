import React from 'react'
import NavBar from '../NavBar/NavBar'

const Layout = (props) => (
  <div>
    <NavBar />
    {props.children}
  </div>
)

export default Layout
