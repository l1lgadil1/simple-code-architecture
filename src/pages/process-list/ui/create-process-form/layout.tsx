import styles from './styles.module.scss';

interface IProps{
  onSubmit:(name:string)=>void;
}
export function Layout({onSubmit}:IProps) {
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    const name = formData.get('name') as string;
    onSubmit(name)
  }
    return (
      <form className={styles.root} onSubmit={handleSubmit}>
        <input type="text" className={styles.input} name='name' placeholder='Process name' required />
        <button className={styles.button}>Create Process</button>
      </form> 
    );  
}
