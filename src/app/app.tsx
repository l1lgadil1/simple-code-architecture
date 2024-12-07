import { Outlet } from 'react-router';
import styles from './app.module.scss';

export function App() {
    return (
        <div className={styles.root}>
            <Outlet />
        </div>
    );
}
