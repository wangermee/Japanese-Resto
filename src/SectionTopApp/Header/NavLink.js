import React from "react"
import styleHeader from "./Header.module.css"

export default function NavLink (props){
    return(
        <a className={styleHeader.navA}  key={props.id} href="/">{props.TitreLink}</a>
    );
}