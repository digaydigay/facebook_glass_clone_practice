import React from 'react'
import Img from "next/image"
import mark from "../pages/images/mark.jpg"
export default function homeleft() {
  return (
    <div className="home_right">
      {/* Sponsored */}
      <div className="home_right_top_content">
        <h6>Sponsored</h6>
        <ul className="lists">
          <li className="item">
            <div className="poster">
              <Img layout="fill" src={mark} alt="dp" />
            </div>

            <div className="title">
              <h6>Sponsored Name</h6>
              <p>Domain.com</p>
            </div>
          </li>
          <li className="item">
            <div className="poster">
              <Img layout="fill" src={mark} alt="dp" />
            </div> <div className="title">
              <h6>Sponsored Name</h6>
              <p>Domain.com</p>
            </div>
          </li>
        </ul>
      </div>
      {/* Page */}
      <div className="home_right_middle_content">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h6>Pages</h6>
          <i className="fas fa-ellipsis-h"></i>
        </div>
        <ul className="lists">
          <li className="item"><i className="fas fa-user"></i>{" "} Users Page</li>
          <li className="item"><i className="fa fa-bell"></i>{" "} Nortification</li>
          <li className="item"><i className="fas fa-briefcase"></i>{" "} Create Promotion</li>
        </ul>
      </div>

      {/* Contact */}

      <div className="home_right_bottom_content">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h6>Contact</h6>
          <div className="actions">
            <i className="fas fa-video"></i>
            <i className="fas fa-search"></i>
            <i className="fas fa-ellipsis-h"></i>
          </div>
        </div>

        <ul className="lists">
          {/* <li className="item"><Img layout="fill" src="/images/profile.JPG" alt="dp" />Mark Zackerburg</li>
          <li className="item"><Img layout="fill" src="/images/profile.JPG" alt="dp" />Bill gates</li>
          <li className="item"><Img layout="fill" src="/images/profile.JPG" alt="dp" />Jeff Bezos</li> */}
        </ul>
      </div>

    </div>
  )
}
