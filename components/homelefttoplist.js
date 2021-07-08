import React from 'react'
import Img from "next/image"
export default function homeleftlist({ name, icon }) {
  return (
    <li className="home_left_top_list">
      {
        icon ?
          <div className="icon">
            <i className={icon}></i>
          </div>
          :
          <div className="dp">
            {/* <Img layout="fill" src="/images/profile.JPG" alt="dp" /> */}
          </div>
      }

      <div className="category">
        {name}
      </div>
    </li>
  )
}
