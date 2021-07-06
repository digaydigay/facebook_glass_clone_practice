import React from 'react'
import Img from "next/image"

export default function navright() {
  return (

    <div className="header_right">
      <div className="header_right_content">
        <div className="profile" >
          <div className="dp">
            <img src="https://scontent.fmnl6-1.fna.fbcdn.net/v/t1.6435-1/c0.62.160.160a/p160x160/201009229_1445123309188047_2496517498265143262_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeH6uwGavB_RCUPf6iTFz5nEPMXf3dgx_KE8xd_d2DH8ocAV1aXQDqlm6-37AvhTmrGqJzIzwrToASCmx0F1E5YK&_nc_ohc=-W7gQyaiMJ8AX8iYiCk&_nc_ht=scontent.fmnl6-1.fna&tp=27&oh=f02396767a7211eb686a912fc95f7711&oe=60E2D8D5" alt="dp" width="25px" height="25px" />
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