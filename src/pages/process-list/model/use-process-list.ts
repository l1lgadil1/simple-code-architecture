
import { useState } from 'react'

export type ProcessListItem = {
    id: string
    name: string
}

export function useProcessList() {
    const [processes, setProcesses] = useState<ProcessListItem[]>([])

    const createProcess = (name: string) => {
        const newProcess = {
            id: String(new Date().toISOString),
            name
        }
        setProcesses([...processes, newProcess])
    }

    const deleteProcess = (id: string) => {
        setProcesses(processes.filter(process => process.id !== id))
    }

    const list = processes.map(i=>({...i,onDelete:()=>deleteProcess(i.id)}))
    return {
        processes:list,
        createProcess,
    }
}
