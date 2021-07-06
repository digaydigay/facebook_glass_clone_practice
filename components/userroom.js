import React from 'react'
import Img from "next/image"

export default function userroom({ user }) {
  return (
    <div className="dp">
      <img src={user} alt="dp" />
    </div>
  )
}
