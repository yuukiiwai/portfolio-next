import { FC } from "react";
import Index from "./index";
import styles from "../../styles/Work.module.css";

const Page1:FC = () => {
    return(
        <section className={styles.page}>
            
            <Index/>
        </section>
    )
}

export default Page1;