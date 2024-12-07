export type Block = {
  id: string;
  name: string;
  type: string;
  inputs: Dependency[];
  outputs: Dependency[];  

  x:number;
  y:number  
} 

export type Dependency = {
  id: string;
  
  outputId:string;
  outputPort:string;
  
  inputId:string;
  inputPort:string;

};  

export type FlowPosition = {
  x: number;
  y: number;  
}