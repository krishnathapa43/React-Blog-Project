import React from 'react'
import Layout from '../../Components/Layout/Layout'
import Form from './Components/from/Form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Login = () => {

    const navigate = useNavigate()
    const handlelogin = async(data) => {
    try{
      const response = await axios.post("https://react30.onrender.com/api/user/login",data)
   if(response.status === 200){
    navigate('/')
   }else{
    alert("Registration Failed")
   }
  }catch(error){
    alert(error?.response?.data?.message)
  }
    }
  
  

  return (   
  <Form type='Login' onSubmit={handlelogin}/> 
  )
}

export default Login