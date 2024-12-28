import React, { createContext } from 'react'


const apidata = createContext();

const ContextApi = ({children}) => {
  return (
    <apidata.Provider value="abc">{children}</apidata.Provider>
  )
}

export {apidata,ContextApi} 
