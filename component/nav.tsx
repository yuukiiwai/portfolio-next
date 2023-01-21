import Link from "next/link";
import { FC } from "react";
import { navlist } from "../data/nav";

const Nav:FC<{lang:string,root:string}> = (props)=>{
    return(
        <nav className='navigation'>
            <ul className='nav-item'>
                {navlist.map((item,key)=>{
                    return(
                        <li key={key}>
                            {props.lang === "ja" &&
                                <Link href={item.href}><a>{item.ja}</a></Link>
                            }
                            {props.lang === "en" &&
                                <Link href={"/en"+item.href}><a>{item.en}</a></Link>
                            }
                        </li>
                    )
                })}
                <li>
                    {props.lang === "ja" &&
                    <Link href={"/en/"+props.root}><a>En</a></Link>
                    }
                    {props.lang === "en" &&
                    <Link href={"/"+props.root}><a>日本語</a></Link>
                    }
                </li>
            </ul>
            <div>
            {props.lang === "ja" &&
            <Link href={"/inquiry"}><a>問い合わせ</a></Link>
            }
            {props.lang === "en" &&
            <Link href={"/en/inquiry"}><a>INQUIRY</a></Link>
            }
            </div>
        </nav>
    );
}

export default Nav;