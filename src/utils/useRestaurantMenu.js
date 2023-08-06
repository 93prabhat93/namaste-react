import { useEffect, useState } from "react";
import { API_URL } from "./constants";

const useRestaurantMenu = (resId)=>{
    const [resInfo,setresInfo] = useState(null)
   useEffect(()=>{
    fetchData()
   },[]);

   const fetchData = async () =>{
    const data = await fetch(API_URL+resId);
    const jsonData = await data.json();
    setresInfo(jsonData.data);
   }
   return resInfo;
}

export default useRestaurantMenu;