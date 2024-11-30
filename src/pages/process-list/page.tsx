import { useProcessList } from './model/use-process-list';
import styles from './page.module.scss'
import { CreateProcessForm } from './ui/create-process-form'
import { ProcessCard } from './ui/process-card';
import { Root } from './ui/root'

export function Page(){
    const { processes,createProcess,isLoading } = useProcessList();
    return (
        <div className={styles.root}>
            <Root
                createFormReact={<CreateProcessForm onSubmit={createProcess} />}
                cards={processes.map(i=>(<ProcessCard onDelete={i.onDelete} name={i.name} key={i.id}  />))}
            />
        </div>
    );
}

