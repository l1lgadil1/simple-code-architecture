
import { useEffect, useState } from 'react'
import { processListApi } from '../api'

export type ProcessListItem = {
    id: string
    name: string
}

export function useProcessList() {
    const [processes, setProcesses] = useState<ProcessListItem[]>([])
    const [isLoading,setLoading] = useState(false);
    const fetchList = async () => {
        setLoading(true)
        await processListApi.list().then(setProcesses).finally(()=>setLoading(false))
    }
    useEffect(()=>{
        fetchList()
    },[])

    const createProcess = async (name: string) => {
        await processListApi.create(name).then(()=>fetchList())
    }

    const deleteProcess = async (id: string) => {
        await processListApi.delete(id).then(()=>fetchList())
    }

    const list = processes.map(i=>({...i,onDelete:()=>deleteProcess(i.id)}))
    return {
        processes:list,
        createProcess,
        isLoading
    }
}
