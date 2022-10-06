import { NextPage } from "next";
import React from "react";
import Head from "next/head";
import Nav from "../component/nav";

const History:NextPage = ()=>{
    return(
        <div>
            <Head>
                <title>岩井優希 | 最新情報</title>
                <meta name="description" content="ニュースページの予定" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav
            root="news"
            />
            <h1
            style={{
                textAlign:"center"
            }}
            >最新情報</h1>
            <p
            style={{
                textAlign:"center"
            }}
            >ニュースページです。<br/>公的に出場したことを書いていこうと思います。</p>
        </div>
    );
}

export default History;