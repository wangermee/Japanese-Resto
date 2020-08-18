import React from "react"

export default function BoxsDiscover(props){
    return(
        <article>
        <div>
            <img src={props.vignette} alt={props.vignette}></img>
        </div>
        
        <div>
            <h3>{props.title}</h3>
            <p>{props.content} <span>{props.price}</span></p>
        </div>

        </article>
    )
}