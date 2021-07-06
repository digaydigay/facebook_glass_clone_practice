import React from 'react'

export default function homeleftlist({ name, image }) {
  return (
    <li className="home_left_bottom_list">
      <div className="poster">
        <img src={image} alt="img" width="30px" height="30px" />
      </div>
      <div className="category">
        <p style={{ fontSize: "14px" }}>{name}</p>
      </div>
    </li>
  )
}
