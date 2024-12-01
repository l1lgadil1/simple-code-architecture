import { Link } from 'react-router';
import styles from './styles.module.scss';

interface IProps {
  name: string;
  id:string;
  onDelete?: () => void;
}

export function Layout({ name, onDelete,id }: IProps) {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <strong className={styles.title}>{name}</strong>
        <Link to={`/process/${id}`} className={styles.link}></Link>
        <button className={styles.button} onClick={onDelete}>
          <span className={styles.buttonText}>Delete</span>
        </button>
      </div>
    </div>
  );
}
