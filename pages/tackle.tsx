import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Nav from "../component/nav";
import {chakra} from '@chakra-ui/react'

const Tackle:NextPage = ()=>{
    const [tackles,setTackles] = useState<{id:string}[]>([]);
    useEffect(()=>{
        fetch(process.env.NEXT_PUBLIC_APIB+"tackles")
        .then(res=>res.json())
        .then(data=>{
            setTackles(data);
        });
    },[])
    return(
        <div>
            <Head>
                <title>岩井優希 | テックブログ</title>
                <meta name="description" content="直近のテックブログ(note)一覧" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav
            root="tackle"
            />
            <h1
            style={{
                textAlign:"center"
            }}
            >挑戦</h1>
            <p
            style={{
                textAlign:"center"
            }}
            >テックブログの更新をお知らせします。</p>
            <h2
            style={{
                textAlign:"center"
            }}
            >Note一覧</h2>
            <div
            style={{
                maxWidth:"494px",
                margin:"auto"
            }}
            >
                {tackles.map((item,key)=>{
                    return(
                        <React.Fragment
                        key={key}
                        >
                            <iframe 
                            className="note-embed" 
                            src={"https://note.com/embed/notes/"+item.id} 
                            style={{
                                border: 0,
                                display: "block",
                                maxWidth: "99%",
                                width: "494px",
                                marginTop: "10px ", 
                                position: "static", 
                                visibility: "visible"
                            }} 
                            height="auto"></iframe>
                            <script async src="https://note.com/scripts/embed.js" charSet="utf-8"></script>
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
}

export default Tackle;