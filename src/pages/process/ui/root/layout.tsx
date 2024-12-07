import { Process } from '../../model/types';
import styles from './styles.module.scss';

interface IProps {
    process?: Process;
    isLoading?: boolean;
    flow: React.ReactNode;
    modals: React.ReactNode;
}
export function Layout({ process, isLoading, flow, modals }: IProps) {
    return (
        <div className={styles.root}>
            {process?.name && <strong className={styles.title}>{process.name}</strong>}
            {isLoading && <div className={styles.loading}>Loading...</div>}
            {flow}
            {modals}
        </div>
    );
}
