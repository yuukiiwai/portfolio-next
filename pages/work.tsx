import { GetServerSideProps, NextPage } from "next";
import  Head  from "next/head";
import { useEffect, useState } from "react";
import Nav from "../component/nav";

import { workType } from "../type/work";
import Introduction from "../component/work/intro";
import Page1 from "../component/work/page1";

interface props{
    works:workType[]
    titles:string[]
}

export const getServerSideProps :  GetServerSideProps = async()=>{
    const res = await fetch(process.env.NEXT_PUBLIC_APIB+"work");
    const works = (await res.json()) as workType[];
    let titles = [];
    for(let i = 0; i < works.length; i++){
        titles.push(works[i].title);
    }
    const props : props = {
        works:works,
        titles:titles
    }
    return {props:props}
}

const Work:NextPage<props> = (props:props) => {
    const works = props.works;
    const titles = props.titles;

    const worksIntroduction = () => {
        const worksintro = works.map((item,key)=>{
            return(
            <Introduction
            key={key}
            item={item}
            id={key}
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
            <div className="main">
            <Nav
            lang="ja"
            root="work"
            />
            <Page1
            titles={titles}
            />
            {worksIntroduction()}
            </div>
        </>
    );
}

export default Work;