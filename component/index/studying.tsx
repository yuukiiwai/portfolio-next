import { FC } from "react";
import styles from "../../styles/Home.module.css";

interface props{
    imgurls:string[]
}

const Studying : FC<props> = (props : props) =>{
    return(
        <div className={styles.studying}>
            <div>
                <span>勉強中</span>
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

export default Studying;