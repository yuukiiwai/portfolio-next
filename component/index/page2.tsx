import { FC, useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import { studystate } from "../../type";
import Canuse from "./canuse";
import Studying from "./studying";
import Willstudy from "./willstudy";

const Page2 : FC = () => {
    const[tools,setTools] = useState<studystate>({will:[],ing:[],can:[]});
    useEffect(()=>{
        fetch(process.env.NEXT_PUBLIC_APIB+"index/study")
        .then(res=>res.json())
        .then(data=>setTools(data))
    },[])
    return(
        <section id="1" className={styles.page}>
            <h2 className={styles.sectionhead}>PG言語の学習状況</h2>
            <div className={styles.pgstudycontent}>
                <Willstudy imgurls={tools.will}/>
                <Studying imgurls={tools.ing}/>
                <Canuse imgurls={tools.can}/>
            </div>
        </section>
    );
}

export default Page2;