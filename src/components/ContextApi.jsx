import React, { createContext } from 'react'


const apidata = createContext();

const ContextApi = () => {
  return (
    <apidata.Provider value="abc">{Children}</apidata.Provider>
  )
}

export {apidata,ContextApi} 
