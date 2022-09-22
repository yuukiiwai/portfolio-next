import { FC } from "react";
import Image from 'next/image';
import styles from '../../styles/Home.module.css'

const Title:FC<{name:string}> = (props)=>{
    return(
        <div className={styles.welcome}>
            <Image src={"/home.jpg"} width={"3648px"} height={"1744px"}
            objectFit={"cover"}
            />
            <h1>{props.name}</h1>
        </div>
    )
}

export default Title;