
import { useEffect, useState } from 'react'
import { processApi } from '../api'

export type ProcessListItem = {
    id: string
    name: string
}

export function useProcessList() {
    const [processes, setProcesses] = useState<ProcessListItem[]>([])
    const [isLoading,setLoading] = useState(false);
    const fetchList = async () => {
        setLoading(true)
        await processApi.list().then(setProcesses).finally(()=>setLoading(false))
    }
    useEffect(()=>{
        fetchList()
    },[])

    const createProcess = async (name: string) => {
        await processApi.create(name).then(()=>fetchList())
    }

    const deleteProcess = async (id: string) => {
        await processApi.delete(id).then(()=>fetchList())
    }

    const list = processes.map(i=>({...i,onDelete:()=>deleteProcess(i.id)}))
    return {
        processes:list,
        createProcess,
    }
}
