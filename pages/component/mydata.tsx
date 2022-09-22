import { FC } from "react";
import Image from 'next/image';
import styles from '../../styles/Home.module.css'

interface props{
    dataS:string,
    name:info,
    univ:info,
    club:info
}

type info={
    S:string,
    data:string,
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
                        <h3>{props.name.S}</h3>
                        <p>{props.name.data}</p>
                    </div>
                    <div className={styles.data}>
                        <h3>{props.univ.S}</h3>
                        <p>{props.univ.data}</p>
                    </div>
                    <div className={styles.data}>
                        <h3>{props.club.S}</h3>
                        <p>{props.club.data}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mydata;