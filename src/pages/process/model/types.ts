export type Process = {
  id: string;
  name: string;
  blocks: Block[];  
};
export type Block = {
  id: string;
  name: string;
  type: string;

  x: number;
  y: number;

  inputs: Dependency[];
  outputs: Dependency[];  
};

export type Dependency = {
  id: string;
  
  outputId:string;
  outputPort:string;
  
  inputId:string;
  inputPort:string;

};  