import styles from './styles.module.scss';

interface IProps {
    title: string;
    body: React.ReactNode;
    footer: React.ReactNode;
    onClose?: () => void;
}
export function Layout({ body, title, footer, onClose }: IProps) {
    return (
        <div className={styles.root}>
            <button onClick={onClose} className={styles.close}>
                x
            </button>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <div className={styles.title}>{title}</div>
                </div>
                <div className={styles.body}>{body}</div>
                <div className={styles.footer}>{footer}</div>
            </div>
        </div>
    );
}
