import { createContext, useContext, useState } from "react";

const InputContext = createContext()
export const UseInputRef = () => {
  return useContext(InputContext)
}
export function InputContextProvider({ children }) {
  const [input, setInput] = useState()
  return (
    <InputContext.Provider value={{ input, setInput }}>
      {children}
    </InputContext.Provider>
  )
}