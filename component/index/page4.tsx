import { FC } from "react";
import styles from "../../styles/Home.module.css";

const Page4:FC = () => {
    return(
        <section className={styles.page} id="3">
            <h2 className={styles.sectionhead}>強み</h2>
            <p className={styles.strong}>目的を達成することを第一に考える。</p>
            <p className={styles.exp}>
                例:アルバイト先でのチャットボット
            <br/>　 元々はアドバイス投稿サイトを提案、開発していたが、
            他スタッフの心理的な障壁を考え、
            <br/>　 一新して保存チャットボットを提案・開発・導入した。</p>
            <p className={styles.strong}>技術の吸収が早い。</p>
            <p></p>
        </section>
    )
}

export default Page4;