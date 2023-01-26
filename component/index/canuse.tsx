import { FC } from "react";
import styles from "../../styles/Home.module.css";
import { langstruct } from "../../type";
import PGimgs from "./pgimage";
interface props{
    langs:langstruct[]
}
const Canuse : FC<props> = (props:props) =>{
    return(
        <div className={styles.canuse}>
            <div>
                <span>何かを作ったことがある</span>
                <PGimgs langs={props.langs}/>
            </div>
        </div>
    )
}

export default Canuse;