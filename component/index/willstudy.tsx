import { FC } from "react";
import styles from "../../styles/Home.module.css";
import { langstruct } from "../../type";
import PGimgs from "./pgimage";

interface props{
    langs:langstruct[]
}

const Willstudy : FC<props> = (props:props) =>{
    return(
        <div className={styles.willstudy}>
            <div>
                <span>これから勉強したい</span>
                <PGimgs langs={props.langs}/>
            </div>
        </div>
    )
}

export default Willstudy;