import { NextPage } from "next";
import  Head  from "next/head";
import  Image  from "next/image";
import { useEffect, useState } from "react";
import Nav from "../component/nav";
import {chakra,Box, extendTheme, ChakraProvider} from '@chakra-ui/react'

import styles from '../styles/Work.module.css';

type workType = {
    title:string,
    url:string,
    backgroundimg:string,
    usageimg:string,
    sentence:string,
}

const theme = extendTheme({
    styles:{
        global:{
            h3:{
                fontSize:{
                    base:"12pt",
                    sm:"16pt",
                    md:"18pt",
                    lg:"20pt"
                }
            },
            p:{
                fontSize:{
                    base:"11pt",
                    sm:"13pt",
                    md:"15pt",
                    lg:"17pt"
                }
            }
        }
    }
})

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
                <title>岩井優希 | 過去の作品</title>
                <meta name="description" content="岩井優希 成果物一覧 順次更新" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.top}>
            <Nav
            root="work"
            />
                <div className={styles.head1}>
                    <h1>作 品</h1>
                </div>
                <chakra.div
                position={"relative"}
                marginTop={"1%"}
                width={{base:"95%",sm:"90%",md:"40%",lg:"30%"}}
                border={"3px dashed whitesmoke"}
                color={"white"}
                marginLeft={"auto"}
                marginRight={"auto"}
                rounded={"lg"}
                >
                    <Box
                    marginTop={"1%"}
                    marginBottom={"1%"}
                    marginLeft={{base:"10%",sm:"10%",md:"10%"}}
                    >
                        <chakra.h2
                        letterSpacing={{base:"10px",md:"15px"}}
                        fontSize={{base:"18pt",sm:"20pt",md:"24pt"}}
                        >目 次</chakra.h2>
                        <ul>
                            {works.map((item,key)=>{
                                return(<li key={key}>
                                        <chakra.a
                                        href={"#"+key}
                                        color={"white"}
                                        fontSize={{base:"14pt",sm:"16pt",md:"20pt"}}
                                        >
                                            {item.title}
                                        </chakra.a>
                                    </li>);
                            })}
                        </ul>
                    </Box>
                </chakra.div>
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
                        <chakra.div
                        className={styles.prodtitle}
                        rounded={"md"}
                        >
                            <chakra.h2
                            letterSpacing={{base:"2pt",sm:"1pt"}}
                            fontSize={{base:"19pt",sm:"20pt",md:"26pt",lg:"32pt"}}
                            >{item.title}</chakra.h2>
                            <chakra.a
                            href={item.url}
                            fontSize={{base:"11pt",sm:"12pt",md:"18pt",lg:"24pt"}}
                            color={"blue"}
                            >
                                {item.url}
                            </chakra.a>
                        </chakra.div>
                        <chakra.div
                        display={{base:"box",md:"flex"}}
                        width={"100%"}
                        >
                            <chakra.div
                            flexGrow={{base:0,md:1}}
                            width={{base:"100%",md:"50%"}}
                            >
                                <chakra.img src={item.usageimg} alt="使い方" 
                                marginTop={{base:"10px",md:"20%"}}
                                marginLeft={"5%"}
                                width={"90%"}
                                border={{base:"2px groove black",md:"3px groove black"}}
                                />
                            </chakra.div>
                            <chakra.div
                            flexGrow={{base:0,md:1}}
                            width={{base:"100%",md:"50%"}}
                            marginTop={{base:"10px",md:"5%"}}
                            borderLeft={"5px solid rgb(172, 182, 138)"}
                            >
                                <ChakraProvider theme={theme}>
                                    <chakra.div
                                    dangerouslySetInnerHTML={{
                                        __html:item.sentence,
                                    }}
                                    marginLeft={"3%"}
                                    marginRight={"3%"}
                                    backgroundColor={"rgba(220, 220, 220, 0.85)"}
                                    rounded={"md"}
                                    />
                                </ChakraProvider>
                            </chakra.div>
                        </chakra.div>
                    </div>
                );
            })}
        </div>
    );
}

export default Work;