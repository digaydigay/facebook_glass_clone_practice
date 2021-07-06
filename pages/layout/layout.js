import React from 'react'
import Header from "../../components/header"
export default function layout({ children }) {
  return (
    <header>
      <Header />
      <div className="bg_overlay1"></div>
      <div className="bg_overlay2"></div>
      <div className="bg_overlay3"></div>
      {children}
    </header>
  )
}
