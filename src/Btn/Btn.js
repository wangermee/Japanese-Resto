import React from "react"

export default function Btn (props){
    return (
        <button onClick={props.clic}>{props.children}</button>
    )
}