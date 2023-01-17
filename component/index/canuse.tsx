import { FC } from "react";
import styles from "../../styles/Home.module.css";
interface props{
    imgurls:string[]
}
const Canuse : FC<props> = (props:props) =>{
    return(
        <div className={styles.canuse}>
            <div>
                <span>何かを作ったことがある</span>
                <div>
                {props.imgurls.map((item,key)=>{
                    return(
                    <img key={key} src={item} width="72" height="72"/>
                    )
                })}
                </div>
            </div>
        </div>
    )
}

export default Canuse;