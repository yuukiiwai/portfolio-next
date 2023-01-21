import { FC } from "react";
import styles from "../../styles/Home.module.css";
import { langstruct } from "../../type";

interface props{
    langs:langstruct[]
}

const Willstudy : FC<props> = (props:props) =>{
    return(
        <div className={styles.willstudy}>
            <div>
                <span>これから勉強したい</span>
                <div>
                {props.langs.map((item,key)=>{
                    return(
                    <img key={key} src={item.imgurl} width="100" height="100"/>
                    )
                })}
                </div>
            </div>
        </div>
    )
}

export default Willstudy;