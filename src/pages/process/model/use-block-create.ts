import { useState } from "react";
import { BlockPosition } from "./types";

export function useBlockCreate(){
  const [positionToCreate, setPositionToCreate] = useState<BlockPosition | null>(null);

  const startCreateBlock = (position:BlockPosition) => {
    setPositionToCreate(position)
  }
  const stopCreateBlock = () => {
    setPositionToCreate(null)
  }
  const isCreating = !!positionToCreate
  return {
    isCreating,
    startCreateBlock,
    stopCreateBlock
  }
}