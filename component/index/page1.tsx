import { FC } from "react";
import Index from "./index";
import Name from "./name";
import styles from "../../styles/Home.module.css";

const Page1:FC = () => {
    return(
        <section className={styles.page}>
            <Name/>
            <Index/>
        </section>
    )
}

export default Page1;