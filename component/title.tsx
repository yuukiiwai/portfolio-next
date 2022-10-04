import { FC } from "react";
import Image from 'next/image';
import styles from '../styles/Home.module.css'
import { chakra } from "@chakra-ui/react";

const Title:FC<{name:string}> = (props)=>{
    return(
        <div className={styles.welcome}>
            <Image src={"/home.jpg"} width={"3648px"} height={"1744px"}
            objectFit={"cover"}
            />
            <chakra.h1
            fontSize={{base:"24pt",sm:"32pt",md:"40pt",lg:"62pt"}}
            letterSpacing={{base:"5px",sm:"10px",md:"20px",lg:"30px"}}
            position={"absolute"}
            color={"white"}
            top={"50%"}
            left={"50%"}
            transform={"translate(-50%,-50%)"}
            margin={0}
            padding={0}
            fontFamily={"Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"}
            textShadow={"-1px -1px 0 black, -1px 0 0 black, -1px 1px 0 black,0 -1px 0 black, 0 1px 0 black, 1px -1px 0 black, 1px 0 0 black, 1px 1px 0 black"}
            >{props.name}</chakra.h1>
        </div>
    )
}

export default Title;