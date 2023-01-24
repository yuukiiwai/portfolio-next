import { FC } from "react";
import styles from "../../styles/Home.module.css";
import { langstruct } from "../../type";

interface props{
    langs:langstruct[]
}

const Studying : FC<props> = (props : props) =>{
    return(
        <div className={styles.studying}>
            <div>
                <span>勉強中</span>
                <div>
                {props.langs.map((item,key)=>{
                    return(
                    <img key={key} src={item.imgurl}/>
                    )
                })}
                </div>
            </div>
        </div>
    )
}

export default Studying;