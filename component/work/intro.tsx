import { workType } from "../../type/work";
import styles from '../../styles/Work.module.css'

interface props{
    key:number
    item:workType
}

const Introduction = (props:props) =>{
    return(
        <div 
            key={props.key}
            style={{
                background:"url("+props.item.backgroundimg+")",
                backgroundSize:'cover',
                position:'relative',
                height:'100vh',
                zIndex:0,
                overflow:"hidden",
            }}
            id={props.key+""}
            className={styles.imgback}
            >
                <div className={styles.prodtitle}>
                    <h2>{props.item.title}</h2>
                    <a href={props.item.url} color={"blue"}>
                        {props.item.url}
                    </a>
                </div>
                <div className={styles.prodslide}
                    dangerouslySetInnerHTML={{
                        __html:props.item.sentence,
                    }}
                />
        </div>
    );
}

export default Introduction;