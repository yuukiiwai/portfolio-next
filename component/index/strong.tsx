import { FC, useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import { strong } from "../../type";

const Strong:FC = () =>{
    const [strong,setStrong] = useState<strong[]>([]);

    useEffect(()=>{
        fetch(process.env.NEXT_PUBLIC_APIB+"index/strong")
        .then(res=>res.json())
        .then(data=>setStrong(data));
    })

    return(
        <div className={styles.strongs}>
            <ul>
                {strong.map((item,key)=>{return(
                    <li key={key}>
                        <p>{item.abst}</p>
                        <ul>
                        {item.exp.map((exp,i)=>{return(
                            <li key={i}>{exp}</li>
                        )})}
                        </ul>
                    </li>
                )})}
            </ul>
        </div>
    )
}

export default Strong;