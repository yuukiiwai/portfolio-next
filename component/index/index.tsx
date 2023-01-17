import { FC } from "react";
import styles from '../../styles/Home.module.css'

const Index : FC = () => {
    return(
        <ul className={styles.index}>
            <li><a href="#1">PG言語の学習状況</a></li>
            <li><a href="#2">技術向き合い遍歴</a></li>
            <li><a href="#3">強み</a></li>
        </ul>
    )
}

export default Index;