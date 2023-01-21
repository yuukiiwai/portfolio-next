import Link from 'next/link';
import { workType } from '../../type/work';
import styles from '../../styles/Work.module.css';
import { FC } from 'react';

interface props{
    titles:string[]
}

const Index:FC<props> = (props:props)=>{
    return(
        <section className={styles.index}>
            <p>目次</p>
            <ol>
                {props.titles.map((item,key)=>{
                    return(
                    <li key={key}>
                        <a href={"#"+key}>
                            {item}
                        </a>
                    </li>);
                })}
            </ol>
        </section>
    )
}

export default Index;