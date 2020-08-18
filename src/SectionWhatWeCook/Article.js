import React from "react"
import Brush from "../assets/img/whatWeCook/Brush.png"

export default function Article (props){
    return(
        <article>
            <img src={Brush} alt="Brush"></img>
            {props.id === 2 ? (
                <img src={Brush} alt="Brush"></img> 
            ):null}
            {props.id === 3 ? (
                <>
                <img src={Brush} alt="Brush"></img> 
                <img src={Brush} alt="Brush"></img>
                </>
            ):null}
            <h2>{props.titre}</h2>
            <p>{props.contenu}</p>
        </article>
    )
}