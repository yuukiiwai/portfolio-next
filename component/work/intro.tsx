import { workType } from "../../type/work";
import styles from '../../styles/Work.module.css'
import { FC } from "react";

interface props{
    id:number
    item:workType
}

const Introduction:FC<props> = (props:props) =>{
    return(
        <div
            className={styles.prod}
            key={props.id}
            id={props.id+""}
            >
                <div className={styles.prodtitle}>
                    <h2>{props.item.title}</h2>
                    <a href={props.item.url}>
                        {props.item.url}
                    </a>
                </div>
                <div
                    className={styles.slide}
                    dangerouslySetInnerHTML={{
                        __html:props.item.slide,
                    }}
                />
        </div>
    );
}

export default Introduction;