import { FC } from "react";
import styles from '../../styles/Home.module.css'

const Name : FC = () => {
    return(
        <div className={styles.name}>
            <p>岩井 優希</p>
            <p>IWAI YUKI</p>
        </div>
    );
}

export default Name;