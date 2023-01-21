import { FC } from "react";
import Index from "./index";
import styles from "../../styles/Work.module.css";

interface props{
    titles:string[]
}

const Page1:FC<props> = (props:props) => {
    return(
        <section className={styles.page}>
            <div className={styles.title}>作品</div>
            <Index titles={props.titles} />
        </section>
    )
}

export default Page1;