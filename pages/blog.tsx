import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Nav from "../component/nav";
import styles from "../styles/Blog.module.css";

const Blog:NextPage = ()=>{
    const [blogs,setBlogs] = useState<{id:string}[]>([]);
    useEffect(()=>{
        fetch(process.env.NEXT_PUBLIC_APIB+"blog")
        .then(res=>res.json())
        .then(data=>{
            setBlogs(data);
        });
    },[])
    return(
        <div>
            <Head>
                <title>岩井優希 | テックブログ</title>
                <meta name="description" content="ブログ" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav
            lang="ja"
            root="blog"
            />
            <main className="main">
                <h1 className={styles.head}>ブログ</h1>
            </main>
            <div
            style={{
                maxWidth:"494px",
                margin:"auto"
            }}
            >
                {blogs.map((item,key)=>{
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

export default Blog;