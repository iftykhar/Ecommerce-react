import React, { createContext } from 'react'


// const apidata = createContext();
const apidata = createContext();


// const ContextApi = ({children}) => {
//   return (
//     // <apidata.Provider value="abc">{children}</apidata.Provider>
//     <apidata.Provider value="abc">{children}</apidata.Provider>

//   )
// }
const ContextApi = ({ children }) => {
  console.log("ContextApi is rendering");
  return <apidata.Provider value="abc">{children}</apidata.Provider>;
};


export {apidata,ContextApi} 
