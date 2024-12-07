
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
async function deleteRelation(id:string ){
    return await fetch(`/api/block/relation/${id}`,
      {
        method:"DELETE",
      }
    ) 
} 
export const blocksFlowApi = {
  addRelation,deleteRelation
}