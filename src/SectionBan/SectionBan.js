import React from "react"
import {Parallax} from "react-parallax"
import CreateMenu from "../CreateMenu/CreateMenu"

export default function SectionBan (props){
    return(
        <Parallax bgImage={props.bkg}>
            <div style={{height:props.height}}>
            {
                props.height ===  null ? (<CreateMenu />):null
            }

            </div>
        </Parallax>
    )
}