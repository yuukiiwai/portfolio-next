import Link from 'next/link';
import { workType } from '../../type/work';
import styles from '../../styles/Work.module.css';
import { FC } from 'react';

interface props{
    works:workType[]
}

const Index:FC<props> = (props:props)=>{
    return(
        <section className={styles.index}>
            <div className={styles.letterbox}>
                <h2 className={styles.MOKUJI}>目 次</h2>
                <ul>
                    {props.works.map((item,key)=>{
                        return(
                        <li key={key}>
                            <Link href={"#"+key}>
                            <a>
                                {item.title}
                            </a>
                            </Link>
                        </li>);
                    })}
                </ul>
            </div>
        </section>
    )
}

export default Index;