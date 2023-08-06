import { useEffect, useState } from "react"


const useOnlineCheck = () => {
    const [isOnline,setIsOnline] = useState(true)

    useEffect(()=>{
        addEventListener("online", (event) => {
            setIsOnline(true) 
        });
        addEventListener("offline", (event) => {
            setIsOnline(false) 
        });
    },[])
    return isOnline;
}

export default useOnlineCheck;