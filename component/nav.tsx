import { FC } from "react";
import { chakra,Link } from "@chakra-ui/react";
import Navlink from "./navlink";

const Nav:FC<{lang?:string,root:string}> = (props)=>{
    if(props.lang === "en"){
        return(
            <nav className='navigation'>
                <ul className='nav-item'>
                    <li><Navlink href="/en" text="Top"/></li>
                    <li><Navlink href={"/en/work"} text="Work"/></li>
                    <li><Navlink href={"/en/history"} text="History"/></li>
                    <li><Navlink href={"/en/tackle"} text="Tackle"></Navlink></li>
                    <li><Navlink href={"/en/news"} text="News"></Navlink></li>
                    <li><Navlink href={"/"+props.root} text="Japanese"></Navlink></li>
                </ul>
            </nav>
        );
    }
    return(
        <nav className='navigation'>
            <ul className='nav-item'>
                <li><Navlink href={"/"} text="トップ"></Navlink></li>
                <li><Navlink href={"/work"} text="作品"></Navlink></li>
                <li><Navlink href={"/history"} text="経歴"></Navlink></li>
                <li><Navlink href={"/tackle"} text="挑戦"></Navlink></li>
                <li><Navlink href={"/news"} text="最新情報"></Navlink></li>
                <li><Navlink href={"/en/"+props.root} text="英語"></Navlink></li>
            </ul>
        </nav>
    );
}

export default Nav;