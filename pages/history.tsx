import { NextPage } from "next";
import React from "react";
import Head from "next/head";
import Nav from "../component/nav";

const History:NextPage = ()=>{
    return(
        <div>
            <Head>
                <title>岩井優希 | 経歴</title>
                <meta name="description" content="経歴ページの予定" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav
            root="history"
            />
            <h1
            style={{
                textAlign:"center"
            }}
            >Maiking</h1>
        </div>
    );
}

export default History;