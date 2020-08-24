import React from "react"
import classes from "./SectionReply.module.css"
import Brush from "../assets/img/whatWeCook/Brush.png"

export default function SectionReply (){
    return(
        <section className={classes.Reply}>
            <img src={Brush} alt="Brush"></img>
            <img src={Brush} alt="Brush"></img>
            <blockquote >
                <q>Lorem ipsum dolor sit amet,  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet,  consectetur adipiscing elit.</q>
                <h2>Linda Steward</h2>
            </blockquote>
            <div>
                <a href="/"><img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="fb"/></a>
                <a href="/"><img src="https://img.icons8.com/color/48/000000/twitter-circled.png" alt="twitter"/></a>
                <a href="/"><img src="https://img.icons8.com/color/48/000000/linkedin-circled.png" alt="linkedin"/></a>   
            </div>
        </section>
    )
}