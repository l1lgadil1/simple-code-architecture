import { Link } from 'react-router';
import styles from './styles.module.scss';

interface IProps {
  query:string;
  onChange:(query:string)=>void;
}

export function Layout({ query,onChange }: IProps) {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
          <input type="text" value={query} onChange={e=>onChange(e.target.value)} className={styles.input} placeholder='Search process value here..' />
      </div>
    </div>
  );
}
