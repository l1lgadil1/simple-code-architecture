import { useParams } from "react-router"

export function useProcessId(){
  const {id} = useParams()    
    return id
}