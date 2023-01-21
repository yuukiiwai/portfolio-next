import { NextPage } from "next";
import React from "react";
import Head from "next/head";
import Nav from "../component/nav";
import styles from "../styles/News.module.css";

const History:NextPage = ()=>{
    return(
        <div>
            <Head>
                <title>岩井優希 | 最新情報</title>
                <meta name="description" content="ニュースページの予定" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav
            lang="ja"
            root="news"
            />
            <main className="main">
                <h1 className={styles.head}>ニュース</h1>
                <p>MAKING</p>
            </main>
        </div>
    );
}

export default History;