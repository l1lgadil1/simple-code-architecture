import { useState, useEffect } from "react"
import { processApi } from '../api'
import { Process } from "./types"

export function useProcess(id:string){
  const [process,setProcess ] = useState<Process | null>(null)
  const [isLoading ,setLoading] = useState(false)

  const fetchProcess = async () => {  
    setLoading(true)
    await processApi.getProcessById(id).then(setProcess).finally(()=>setLoading(false)) 
  }
  useEffect(()=>{
    if(id){
      fetchProcess()
    }
    },[id]) 
 
  return {
    process,
    isLoading
  }
}
   