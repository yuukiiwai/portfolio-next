import { FC } from "react";
import Image from 'next/image';
import styles from '../styles/Home.module.css'

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
                <h2>{props.dataS}</h2>
                <div className={styles.datacontainer}>
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
                </div>
            </div>
        </div>
    )
}

export default Mydata;