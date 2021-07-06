import React from 'react'

import LeftNav from "./headernavleft"
import CenterNav from "./headercenternav"
import RightNav from "./headerrightnav"
export default function layout({ children }) {
  return (
    <>
      <header className="header">
        <nav className="header_nav">
          <div className="header_container" >
            <ul className="header_row_nav ">
              <li className="nav_container"><LeftNav /></li>
              <li className="nav_container" ><CenterNav /></li>
              <li className="nav_container"><RightNav /></li>
            </ul>
          </div>
        </nav>
      </header>
      {children}
    </>
  )
}
