import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
export default function Logout() {
    const {setAuth} = useContext(AuthContext)
    const navigate = useNavigate()
    useEffect(() => {
        setAuth(false)
        navigate('/Login')
    },[])
  return (
    <div>
      
    </div>
  )
}
