import { FC, Fragment, useEffect, useState } from "react";
import { preNews } from "../../type/news";
import Link from 'next/link'
const Newses:FC<{lang:string}> = (props)=>{
    const [news,setNews] = useState<preNews[]>([]);
    const [langpara,setLpara] = useState<string>("");

    useEffect(()=>{
        if(props.lang === "ja"){
            setLpara("");
        }else if(props.lang === "en"){
            setLpara("en/");
        }
        setNews([
            {
                title:"レバテックルーキー逆求人イベントに参加しました。",
                id:0
            }
        ]);
    },[]);
    return(
        <ul>
            {
                news.map((item,key)=>{
                    return(
                        <li key={key}><Link href={"/"+langpara+"news/"+item.id}>{item.title}</Link></li>
                    );
                })
            }
        </ul>
    )
}

export default Newses;