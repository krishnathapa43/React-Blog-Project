import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Layout from '../../Components/Layout/Layout'
import Card from './Components/Card/Card'

const Home = () => {
  return (
    <Layout>
       <div className='flex flex-warp justify-center space-x-5 mt-6 '>
            <Card/> 
            <Card/>
            <Card/>
       </div>
       
    </Layout>
  )
}

export default Home