import React from 'react'
import Img from "next/image"
export default function homeleftlist({ name, icon, dp }) {
  return (
    <li className="home_left_top_list">
      {
        icon ?
          <div className="icon">
            <i className={icon}></i>
          </div>
          :
          <div className="dp">
            <Img layout="fill" src={dp} alt="dp" />
          </div>
      }

      <div className="category">
        {name}
      </div>
    </li>
  )
}
