import Link from "next/link";
import { FC } from "react";

const Nav:FC<{lang?:string,root:string}> = (props)=>{
    if(props.lang === "en"){
        return(
            <nav className='navigation'>
                <ul className='nav-item'>
                    <li><Link href={"/en"}>Top</Link></li>
                    <li><Link href={"/en/work"}>Work</Link></li>
                    <li><Link href={"/en/history"}>History</Link></li>
                    <li><Link href={"/en/tackle"}>Tackle</Link></li>
                    <li><Link href={"/en/news"}>News</Link></li>
                    <li><Link href={"/"+props.root}>Japanese</Link></li>
                </ul>
            </nav>
        );
    }
    return(
        <nav className='navigation'>
            <ul className='nav-item'>
                <li><Link href={"/"}>トップ</Link></li>
                <li><Link href={"/work"}>作品</Link></li>
                <li><Link href={"/history"}>経歴</Link></li>
                <li><Link href={"/tackle"}>挑戦</Link></li>
                <li><Link href={"/news"}>最新情報</Link></li>
                <li><Link href={"/en/"+props.root}>英語</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;