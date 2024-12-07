import styles from './styles.module.scss';

interface IProps {
    blocks: React.ReactNode;
    arrows: React.ReactNode;
    field: React.ReactNode;
}
export function Layout({ arrows, blocks, field }: IProps) {
    return (
        <div className={styles.root}>
            {field}
            {blocks}
            {arrows}
        </div>
    );
}
