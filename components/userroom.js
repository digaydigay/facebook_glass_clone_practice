import React from 'react'
import Img from "next/image"

export default function userroom({ dp }) {
  return (
    <div className="dp">
      <Img layout="fill" src={dp} alt="dp" />
    </div>
  )
}
