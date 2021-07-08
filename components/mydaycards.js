import React from 'react'
import Img from "next/image"
import mark from "../pages/images/mark.jpg"


export default function mydaycards({ create, user, dp }) {
  return (
    <div className="my_day_card_item">
      {create ?
        <>
          <Img layout="fill" src={dp} alt="dp" />
          <div className="create_card">
            <i className="fas fa-plus"></i>
            <h6>{create}</h6>
          </div>
        </>
        :
        <>
          <Img layout="fill" src={dp} alt="dp" />
          <h6 className="user">{user}</h6>
        </>
      }

      <div className="dp">
        <Img layout="fill" src={dp} alt="dp" />
      </div>

    </div>
  )
}
