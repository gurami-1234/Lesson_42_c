import React, { useEffect, useState } from 'react'
import { getSingleProduct } from './helper/api'

const GetSignle = () => {
  const [data,setData] = useState({})
  useEffect(()=>{
    getSingleProduct(170).then((resp)=>setData(resp))
  },[])
  return (
    <h2>{ data.title } - {data.price}</h2>
  )
}

export default GetSignle