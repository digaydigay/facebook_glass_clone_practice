import React from 'react'
import Img from "next/image"

export default function navright() {
  return (

    <div className="header_right">
      <div className="header_right_content">
        <div className="profile" >
          <div className="dp">
            {/* <Img layout="fill" src="/images/profile.JPG" alt="dp" /> */}
          </div>
          <h5>Jonathan</h5>
        </div>
        <ul className="profile_info">
          <li className="icon menu"><i className="fas fa-bars"></i> <div className="tooltip">MENU</div></li>
          <li className="icon plus"><i className="fas fa-plus"></i> <div className="tooltip">CREATE</div></li>
          <li className="icon"><i className="fa fa-facebook-messenger"></i> <div className="tooltip">MESSENGER</div></li>
          <li className="icon"><i className="fa fa-bell"></i> <div className="tooltip">NOTIFICATION</div></li>
          <li className="icon"><i className="fa fa-sort-down"></i> <div className="tooltip">ACCOUNT</div></li>
        </ul>
      </div>
    </div >


  )
}