import React from 'react'
import Img from "next/image"

export default function userroom({ user }) {
  return (
    <div className="dp">
      <Img src={user} alt="dp" />
    </div>
  )
}
