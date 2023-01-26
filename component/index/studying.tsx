import { FC } from "react";
import styles from "../../styles/Home.module.css";
import { langstruct } from "../../type";
import PGimgs from "./pgimage";

interface props{
    langs:langstruct[]
}

const Studying : FC<props> = (props : props) =>{
    return(
        <div className={styles.studying}>
            <div>
                <span>勉強中</span>
                <PGimgs langs={props.langs}/>
            </div>
        </div>
    )
}

export default Studying;