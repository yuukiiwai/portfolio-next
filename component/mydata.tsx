import { FC } from "react";
import Image from 'next/image';
import styles from '../styles/Home.module.css'
import {chakra} from '@chakra-ui/react'

type info={
    St:string,
    data:string,
}

interface props{
    dataS:string,
    name:info,
    univ:info,
    club:info
}

const Mydata:FC<props> = (props)=>{
    return(
        <div
            style={{
                height:"100vh",
            }}
            id={"mydata"}
            className={styles.bg_data}
            >
            <div className={styles.container}>
                <chakra.h2
                marginTop={"10%"}
                fontSize={{base:"40pt",sm:"44pt",md:"46pt",lg:"50pt"}}
                >{props.dataS}</chakra.h2>
                <chakra.div
                marginLeft={"3%"}
                fontSize={{base:"22pt",sm:"24pt",md:"28pt",lg:"32pt"}}
                className={styles.datacontainer}
                >
                    <div className={styles.data}>
                        <h3>{props.name.St}</h3>
                        <p>{props.name.data}</p>
                    </div>
                    <div className={styles.data}>
                        <h3>{props.univ.St}</h3>
                        <p>{props.univ.data}</p>
                    </div>
                    <div className={styles.data}>
                        <h3>{props.club.St}</h3>
                        <p>{props.club.data}</p>
                    </div>
                </chakra.div>
            </div>
        </div>
    )
}

export default Mydata;