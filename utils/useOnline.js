import { useEffect, useState } from "react"

const useOnline=()=>{
    const [isOnline,setIsOnline]= useState(true);
    handleOnline=()=>{
        setIsOnline(true)
    }
    handleOffline=()=>{
        setIsOnline(false)
    }
   
    useEffect(()=>{
        
    window.addEventListener('online',handleOnline);
    window.addEventListener('offline',handleOffline);
    return()=>{
        window.removeEventListener('online',handleOnline);
        window.removeEventListener('offline',handleOffline);
    }
    },[])

    return isOnline;

}
export default useOnline;