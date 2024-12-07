import { FlowPosition } from '../../model/types';
import styles from './styles.module.scss';

interface IProps {
    onClick: (data: FlowPosition) => void;
}
export function Layout({ onClick }: IProps) {
    const handleClick = (e: React.MouseEvent) => {
        onClick({ x: e.clientX, y: e.clientY });
    };
    return (
        <div className={styles.root} onClick={handleClick}>
            Field
        </div>
    );
}
