import { Block } from '../../model/types';
import styles from './styles.module.scss';

interface IProps {
    block: Block;
}
export function Layout({ block }: IProps) {
    return (
        <div
            className={styles.root}
            style={{
                left: block.x,
                top: block.y,
            }}>
            {block.name}
        </div>
    );
}
