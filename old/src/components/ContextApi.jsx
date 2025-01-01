// import React, { createContext, useEffect } from 'react'
// import axios from 'axios';
// import { data } from 'autoprefixer';


// // const apidata = createContext();
// const apidata = createContext();


// const ContextApi = ({children}) => {
  
//   let  [infos, setinfos] = usestate([])

//   useEffect(()=>{
//     axios.get('https://dummyjson.com/products')
//     .then((data)) => setinfos((data))
//   },[]);

//   return (
//     // <apidata.Provider value="abc">{children}</apidata.Provider>
//     <apidata.Provider value="abc">{children}</apidata.Provider>

//   )
// }



// export {apidata,ContextApi} 
import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const apidata = createContext();

const ContextApi = ({ children }) => {
  // Corrected the declaration of the state
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then((response) => setInfos(response.data.products))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <apidata.Provider value={infos}>
      {children}
    </apidata.Provider>
  );
};

export { apidata, ContextApi };
