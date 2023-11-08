import { useEffect, useState } from "react"
import axios  from 'axios';

export default function useFetsh(url) {

    const [data,setData]=useState([])
    const [isLoading,setIsLoading]=useState(false)

    
  useEffect(()=>{
    const fechdata=()=>{
      setIsLoading(true)
      axios.get(url)
       .then(response =>{
      setData(response.data)
      
    }
    )
    setIsLoading(false)
  }
  fechdata();
  
  },[url])

return {data,isLoading};
 }
    
