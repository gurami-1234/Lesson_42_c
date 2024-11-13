import axios from "axios";
const baseURL = "https://dummyjson.com/"

export  const getProducts = async () =>{
    const resp = await axios.get(`${baseURL}products`)
    // console.log(resp.data.products);
    return resp.data.products
}

export const getSingleProduct = async (id)=>{
    const resp = await axios.get(`${baseURL}products/${id}`)
    console.log(resp);
    return resp.data
}
