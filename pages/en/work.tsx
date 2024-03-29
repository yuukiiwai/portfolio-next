import { NextPage } from "next";
import  Head  from "next/head";
import { useEffect, useState } from "react";
import Nav from "../../component/nav";
import styles from '../../styles/Work.module.css'

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
        fetch(process.env.NEXT_PUBLIC_APIB_E+"works")
        .then(res => res.json())
        .then(data=>setWorks(data as workType[]))
        .catch(()=>{setWorks([])});

    },[]);

    return(
        <div>
            <Head>
                <title>Works</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.top}>
            <Nav
            lang="en"
            root="work"
            />
                <div className={styles.head1}>
                    <h1>MAKING</h1>
                </div>
            </div>
        </div>
    );
}

export default Work;