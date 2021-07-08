import React from 'react'
import Img from "next/image"
import mark from "../pages/images/mark.jpg"


export default function mydaycards({ create, poster, user }) {
  return (
    <div className="my_day_card_item">
      {create ?
        <>
          <Img layout="fill" src={mark} alt="dp" />
          <div className="create_card">
            <i className="fas fa-plus"></i>
            <h6>{create}</h6>
          </div>
        </>
        :
        <>
          <Img layout="fill" src={mark} alt="dp" />
          <h6 className="user">{user}</h6>
        </>
      }

      {
        poster ?
          <div className="dp">
            <Img layout="fill" src={mark} alt="dp" />
          </div>
          : ""
      }
    </div>
  )
}
