import { useFilters } from './model/use-filters';
import { useProcessList } from './model/use-process-list';
import styles from './page.module.scss';
import { CreateProcessForm } from './ui/create-process-form';
import { Filters } from './ui/filters';
import { ProcessCard } from './ui/process-card';
import { Root } from './ui/root';

export function Page() {
    const { processes, createProcess, isLoading } = useProcessList();
    const [filteredList, filters] = useFilters(processes);
    return (
        <div className={styles.root}>
            <Root
                filters={<Filters query={filters.q} onChange={filters.setQ} />}
                isLoading={isLoading}
                createFormReact={<CreateProcessForm onSubmit={createProcess} />}
                cards={filteredList.map((i) => (
                    <ProcessCard id={i.id} onDelete={i.onDelete} name={i.name} key={i.id} />
                ))}
            />
        </div>
    );
}
