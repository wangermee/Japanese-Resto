import React from "react"
import Brush from "../assets/img/whatWeCook/Brush.png"
import classes from "./KeepThings.module.css"

export default function KeepThings (){
    return(
        <section className={classes.KeepThings}>
            <article>
                <h2>We like to keep things simple</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                <div>
                    <img src={Brush} alt="Brush"></img>
                    <img src={Brush} alt="Brush"></img>
                    <img src={Brush} alt="Brush"></img>
                </div>
            </article>
        </section>
    )
} 