import React from 'react'
import Banner from '../components/Banner'
import Featured from '../components/Featured'
// import LatestProduct from '../components/LatestProduct'

const Home = () => {
  return (
    <section>
      {/* <div className="container mx-auto"> */}
        <Banner />
        <Featured />
        {/* <LatestProduct /> */}
      {/* </div> */}
    </section>
  )
}

export default Home
