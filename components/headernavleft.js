import React, { useState } from 'react'
import Image from "next/image"
import logo from "../pages/images/facebook.png"
import SearchModal from './searchmodal'
import { UseInputRef } from "../Api/contextinput"

export default function Navleft() {
  const [activeSearch, setActiveSearch] = useState(false)
  const { input, setInput } = UseInputRef()
  const Search = () => {
    console.log(activeSearch)
    return setActiveSearch(true)
  }
  return (
    <div className="left_nav">
      <div className="left_nav_content">

        <div className="logo" ><i className="fab fa-facebook facebook_logo"></i></div>

        <div className="search_bar" onClick={Search}>
          <i className="fas fa-search"></i>
          <div className="input">
            <input type="text" placeholder="Search facebook" onClick={Search} value={input} onChange={(e) => setInput(e.target.value)} />
          </div>
        </div>

        <div className="menu">
          <i className="fas fa-bars"></i>
        </div>

      </div>

      <SearchModal input={input} setInput={setInput} active={activeSearch} setActive={setActiveSearch} />
    </div>

  )
}

