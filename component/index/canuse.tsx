import { FC } from "react";
import styles from "../../styles/Home.module.css";
import { langstruct } from "../../type";
interface props{
    langs:langstruct[]
}
const Canuse : FC<props> = (props:props) =>{
    return(
        <div className={styles.canuse}>
            <div>
                <span>何かを作ったことがある</span>
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

export default Canuse;