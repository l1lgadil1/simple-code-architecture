import styles from './styles.module.scss';

interface IProps {
  name: string;
  onDelete?: () => void;
}

export function Layer({ name, onDelete }: IProps) {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <strong className={styles.title}>{name}</strong>
        <button className={styles.button} onClick={onDelete}>
          <span className={styles.buttonText}>Delete</span>
        </button>
      </div>
    </div>
  );
}
