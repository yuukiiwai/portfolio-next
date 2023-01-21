import { FC } from "react";
import styles from "../../styles/Home.module.css";
import History from "./history";

const Page3:FC = () => {
    return(
        <section className={styles.page} id="2">
            <h2 className={styles.sectionhead}>自分史</h2>
            <History/>
        </section>
    )
}

export default Page3;