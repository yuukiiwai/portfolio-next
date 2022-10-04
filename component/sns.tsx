import { FC } from "react";
import Image from 'next/image';
import styles from '../styles/Home.module.css'
import {chakra} from '@chakra-ui/react'

interface props{
    openCodeS:string,
    contactS:string
}

const Sns:FC<props> = (props)=>{
    return(
        <div 
            id={'sns'}
            style={{
                height:"100vh",
            }}
            className={styles.sns}
        >
            <div className={styles.container}>
                <chakra.h2
                fontSize={{base:"40pt",sm:"48pt",md:"56pt",lg:"68pt"}}
                >SNS</chakra.h2>
                <chakra.h3
                paddingTop={"3%"}
                fontSize={{base:"26pt",sm:"32pt",md:"40pt",lg:"52pt"}}
                >{props.openCodeS}</chakra.h3>
                <div className='paralist'>
                    <ul>
                        <li><a href='https://github.com/yuukiiwai' target={'_blank'} rel={"noopener noreferrer"}><Image alt='GitHub' src={"/GitHub-Mark-64px.png"} height={"64px"} width={"64px"}/></a></li>
                        <li><a href='https://www.npmjs.com/~yuukiiwai' target={'_blank'} rel={"noopener noreferrer"}><Image alt='npm' src={"/n-large.png"}  height={"64px"} width={"64px"}/></a></li>
                    </ul>
                </div>
                <chakra.h3
                paddingTop={"3%"}
                fontSize={{base:"26pt",sm:"32pt",md:"40pt",lg:"52pt"}}
                >{props.contactS}</chakra.h3>
                <div className='paralist'>
                    <ul>
                        <li><a href='https://www.facebook.com/profile.php?id=100058661537496' target={'_blank'} rel={"noopener noreferrer"}><Image alt='npm' src={"/f_logo_RGB-Black_58.png"}  height={"64px"} width={"64px"}/></a></li>
                        <li><a href='https://twitter.com/y_u_k_i_open' target={'_blank'} rel={"noopener noreferrer"}><Image alt='Twitter' src={"/Logo black.svg"} height={"64px"} width={"64px"}/></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sns;