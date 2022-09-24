import { NextPage } from "next";
import  Head  from "next/head";
import  Image  from "next/image";
import { useEffect, useState } from "react";
import Nav from "../component/nav";
import styles from '../styles/Work.module.css'

type workType = {
    title:string,
    url:string,
    backgroundimg:string,
    usageimg:string,
    sentence:string,
}

const Work: NextPage = () => {
    const [works,setWorks] = useState<workType[]>([]);

    useEffect(()=>{
        fetch(process.env.NEXT_PUBLIC_APIB+"works")
        .then(res => res.json())
        .then(data=>setWorks(data as workType[]))
        .catch(()=>{setWorks([])});
    },[]);

    return(
        <div>
            <Head>
                <title>作品</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.top}>
            <Nav
            root="work"
            />
                <div className={styles.head1}>
                    <h1>作 品</h1>
                </div>
                <div className={styles.index}>
                    <h2>目 次</h2>
                    <ul>
                        {works.map((item,key)=>{
                            return(<li key={key}><a href={"#"+key}>{item.title}</a></li>);
                        })}
                    </ul>
                </div>
            </div>
            {/* 内容は背景が関連画像のぼかし、右半分が利用gif、左半分がマークダウン説明文 */}
            {works.map((item,key)=>{
                return(
                    <div 
                    key={key}
                    style={{
                        background:"url("+item.backgroundimg+")",
                        backgroundSize:'cover',
                        position:'relative',
                        height:'100vh',
                        zIndex:0,
                        overflow:"hidden",
                    }}
                    id={key+""}
                    className={styles.imgback}
                    >
                        <div className={styles.prodtitle}>
                            <h2>{item.title}</h2>
                            <a href={item.url}>{item.url}</a>
                        </div>
                        <div className={styles.prod}>
                            <div
                            className={styles.prodleft}
                            >
                                <img src={item.usageimg} alt="使い方" />
                            </div>
                            <div
                            className={styles.prodright}
                            >
                                <div
                                dangerouslySetInnerHTML={{
                                    __html:item.sentence,
                                }}
                                style={{
                                    marginLeft:"3%"
                                }}
                                className={styles.content}
                                />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Work;