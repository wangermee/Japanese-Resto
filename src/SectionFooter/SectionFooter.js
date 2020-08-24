import React from "react"
import classes from "./SectionFooter.module.css"

export default function SectionFooter (){
    return(
        <footer id="footer" className={classes.Footer}>
            <div className={classes.FooterFlex}>
                <div>
                    <h2>ABOUT</h2>
                    <p>Lorem ipsum dolor sit amet,  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet,  consectetur adipiscing elit.</p>
                </div>
                <div>
                    <h2>HOME</h2> 
                    <ul>
                        <li><a href="/">Team</a></li>
                        <li><a href="/">Join Us</a></li>
                        <li><a href="/">Ethic</a></li>
                        <li><a href="/">Goals</a></li>
                    </ul>                   
                </div>
            </div>
        </footer>
    )
}