import React, { useRef, useEffect } from 'react'



export default function searchmodal({ active, setActive, input, setInput }) {
  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
  }, [active])

  return (
    <div className={active ? "search_modal_active search_modal" : "search_modal"}>

      <div className="search_action">

        <div className="back" onClick={() => setActive(false)}>
          <i className="fas fa-arrow-left"></i>
        </div>

        <form className="search_input_modal">
          <input type="text" placeholder="Search Facebook" ref={inputRef} value={input} onChange={(e) => setInput(e.target.value)} />
        </form>
        <div className="clear" onClick={() => setInput("")} >
          <i className="fas fa-times" ></i>
        </div>
      </div>

      <div className="search_results">
        <h5>no Search pound..</h5>
      </div>

    </div>
  )
}
