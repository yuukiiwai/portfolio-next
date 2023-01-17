import { NextPage } from "next";
import  Head  from "next/head";
import { useEffect, useState } from "react";
import Nav from "../component/nav";

import styles from '../styles/Work.module.css';
import Index from "../component/work";
import { workType } from "../type/work";
import Introduction from "../component/work/intro";

const Work: NextPage = () => {
    const [works,setWorks] = useState<workType[]>([]);

    useEffect(()=>{
        fetch(process.env.NEXT_PUBLIC_APIB+"works")
        .then(res => res.json())
        .then(data=>setWorks(data as workType[]))
        .catch(()=>{setWorks([])});
    },[]);

    const worksIntroduction = () => {
        const worksintro = works.map((item,key)=>{
            return(
            <Introduction
            item={item}
            key={key}
            />
            )
        });
        return worksintro;
    }

    return(
        <>
            <Head>
                <title>岩井優希 | 過去の作品</title>
                <meta name="description" content="岩井優希 成果物一覧 順次更新" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.main}>
            <Nav
            lang="ja"
            root="work"
            />
            <Index works={works}/>
            {worksIntroduction()}
            </div>
        </>
    );
}

export default Work;