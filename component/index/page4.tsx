import { FC } from "react";
import styles from "../../styles/Home.module.css";
import Strong from "./strong";

const Page4:FC = () => {
    return(
        <section className={styles.page} id="3">
            <h2 className={styles.sectionhead}>強み</h2>
            <Strong/>
        </section>
    )
}

export default Page4;