import React from 'react'
import {NavLink} from 'react-router-dom'

import './NavLinks.css'

export default props => {
  return (
      <ul className='header_links'>
          <li>
              <NavLink to='/' exact>
                  Home
              </NavLink>
          </li>
          <li>
              <NavLink to='/about' >
                  About
              </NavLink>
          </li>
      </ul>
  )
}