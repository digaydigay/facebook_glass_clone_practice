import React from 'react'
export default function centernav() {

  return (
    <div className="header_center">
      <div className="header_center_content">
        <div className="icon active">
          <i className="fas fa-home"></i>
          <div className="tooltip">HOME </div>
        </div>
        <div className="icon" >
          <i className="far fa-flag"></i>
          <div className="tooltip">PAGES </div>
        </div>
        <div className="icon">
          <i className="fas fa-film"></i>
          <div className="tooltip">WATCH</div>
        </div>
        <div className="icon">
          <i className="fas fa-store"></i>
          <div className="tooltip">MARKET</div>
        </div>
        <div className="icon groups">
          <i className="fas fa-users"></i>
          <div className="tooltip">GROUPS</div>
        </div>
        <div className="icon menu">
          <i className="fas fa-bars"></i>
          <div className="tooltip">MENU</div>
        </div>
      </div>
    </div>

  )
}
