import React from "react"

export default function Action (props){
    return(
        <p onClick={props.clic}>{props.children}</p>
    )
} 