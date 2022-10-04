//import Link from "next/link";
import { FC } from "react";
import { chakra,Link } from "@chakra-ui/react";

const Navlink:FC<{href:string,text:string}> = (props)=>{
    return(
        <Link href={props.href}
        fontSize={{base:"12pt",sm:"14pt",md:"18pt"}}
        textDecoration={"none"}
        color={"black"}
        _hover={{
            color:"rgb(136, 136, 136)"
        }}
        >{props.text}</Link>
    );
}

export default Navlink;