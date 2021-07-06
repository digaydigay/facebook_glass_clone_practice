import React from 'react'
export default function homeleftlist({ name, icon }) {
  return (
    <li className="home_left_top_list">
      {
        icon ?
          <div className="icon">
            <i className={icon}></i>
          </div>
          :
          <div className="dp">
            <img src="https://scontent.fmnl6-1.fna.fbcdn.net/v/t1.6435-1/c0.62.160.160a/p160x160/201009229_1445123309188047_2496517498265143262_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeH6uwGavB_RCUPf6iTFz5nEPMXf3dgx_KE8xd_d2DH8ocAV1aXQDqlm6-37AvhTmrGqJzIzwrToASCmx0F1E5YK&_nc_ohc=-W7gQyaiMJ8AX8iYiCk&_nc_ht=scontent.fmnl6-1.fna&tp=27&oh=f02396767a7211eb686a912fc95f7711&oe=60E2D8D5" alt="dp" width="25px" height="25px" />
          </div>
      }

      <div className="category">
        {name}
      </div>
    </li>
  )
}
