import { Process } from "./model/types"

async function getProcessById(id:string){
  return await fetch(`/api/processes/${id}`).then(res=>res.json() as Promise<Process>)
}


type CreateBlockParams = {
  processId:string; 
  name:string;
  type:string;
  data:string;
  x:number;
  y:number; 
}

async function createBlock(data:CreateBlockParams  ){
  return await fetch(`/api/processes/block`,
    {
      method:"POST",
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(data)
    }
  )
}

type CreateRelationParams = {
  outputId:string;
  outputPort:string;  
  inputId:string;
  inputPort:string;
} 

async function addRelation(data:CreateRelationParams ){
    return await fetch(`/api/block/relation`,
      {
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(data)
      }
    ) 
} 
export const processApi = {
  getProcessById,
  createBlock,
  addRelation
}