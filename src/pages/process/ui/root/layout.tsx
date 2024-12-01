import { Process } from '../../model/types';
import styles from './styles.module.scss';

interface IProps {
    process?: Process;
    isLoading?: boolean;
}
export function Layout({ process, isLoading }: IProps) {
    return (
        <div className={styles.root}>
            {process?.name && <strong className={styles.title}>{process.name}</strong>}
            {isLoading && <div className={styles.loading}>Loading...</div>}
        </div>
    );
}
