import styles from './styles.module.scss'

interface IProps{
    createFormReact: React.ReactNode,
    cards: React.ReactNode
}

export function Layout({cards,createFormReact}:IProps){
    return (
    <div className={styles.root}>
       <h1 className={styles.title}>
        Process List Page
       </h1>
        {createFormReact}
       <div className={styles.list}>
            {cards}
       </div>
        <a className={styles.link} href="process/123"> Go to process</a>
    </div>
    )
}

