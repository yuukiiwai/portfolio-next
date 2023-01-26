import { FC } from "react";
import { langstruct } from "../../type";

interface props{
    langs:langstruct[]
}

const PGimgs:FC<props> = (props:props)=>{
    const ret = props.langs.map((item,key)=>{
        return(
            <img src={item.imgurl} title={item.tech} key={key}/>
        )
    });

    return (<div>{ret}</div>);
}

export default PGimgs;