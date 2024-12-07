import { Block } from "../../../modules/manage-block/blocks-flow/model/types";

export type Process = {
  id: string;
  name: string;
  blocks: Block[];  
};

export type BlockPosition = {
  x: number;
  y: number;  
}