import React from 'react'
import Img from "next/image"

export default function homeleftlist({ name, image }) {
  return (
    <li className="home_left_bottom_list">
      <div className="poster">
        {/* <Img layout="fill" src="/images/profile.JPG" alt="dp" /> */}
      </div>
      <div className="category">
        <p style={{ fontSize: "14px" }}>{name}</p>
      </div>
    </li>
  )
}
