import React from 'react'
import Img from "next/image"
import mark from "../pages/images/mark.jpg"

export default function homeleftlist({ name }) {
  return (
    <li className="home_left_bottom_list">
      <div className="poster">
        <Img layout="fill" src={mark} alt="dp" />
      </div>
      <div className="category">
        <p style={{ fontSize: "14px" }}>Your Page Shoorcut</p>
      </div>
    </li>
  )
}
