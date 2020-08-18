import React from "react"
import Header from "./Header/Header"
import Title from "./Title/Title"
import logo from "../assets/img/topApp/logo.png"
import classes from "./SectionTopApp.module.css"

import bkg from "../assets/img/topApp/bkg.png"
import { Parallax} from "react-parallax"

export default function SectionTopApp (){
    return(
        <>
        <Parallax bgImage={bkg}>
            <section className={classes.section}>
                <div>
                    <Header />
                    <div className={classes.main}>
                        <img src={logo} alt="logo" ></img>
                        <Title>NEW OPENING  <span>23RD SPT</span></Title>
                    </div>  
                </div>
            </section>
        </Parallax>

        </>
    )
}