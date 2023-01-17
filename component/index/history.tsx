import { FC, useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import { history } from "../../type";

const History:FC = () => {
    const [history,setHistory] = useState<history[]>([]);
    useEffect(()=>{
        fetch(process.env.NEXT_PUBLIC_APIB+"index/history")
        .then(res=>res.json())
        .then(data=>setHistory(data));
    },[])
    return(
        <div className={styles.history}>
            <ul>
                {history.map((item,key)=>{return(
                    <li key={key}>
                        <span>{item.when}</span>
                        <div>{item.event}</div>
                    </li>
                )})}
            </ul>
        </div>
    );
}

export default History;