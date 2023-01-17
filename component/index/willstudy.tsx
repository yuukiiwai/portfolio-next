import { FC } from "react";
import styles from "../../styles/Home.module.css";

interface props{
    imgurls:string[]
}

const Willstudy : FC<props> = (props:props) =>{
    return(
        <div className={styles.willstudy}>
            <div>
                <span>これから勉強したい</span>
                <div>
                {props.imgurls.map((item,key)=>{
                    return(
                    <img key={key} src={item} width="100" height="100"/>
                    )
                })}
                </div>
            </div>
        </div>
    )
}

export default Willstudy;