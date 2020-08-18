import React, { Component } from "react"
import BoxDiscover from "./BoxsDiscover/BoxsDiscover"
import SmartObject1 from "../assets/img/Discover/SmartObject1.png"
import SmartObject2 from "../assets/img/Discover/SmartObject2.png"
import SmartObject3 from "../assets/img/Discover/SmartObject3.png"
import SmartObject4 from "../assets/img/Discover/SmartObject4.png"
import SmartObject5 from "../assets/img/Discover/SmartObject5.png"
import SmartObject6 from "../assets/img/Discover/SmartObject6.png"
import classes from "./SectionDiscover.module.css"

export default class SectionDiscover extends Component{
    state={
        boxs:[
            {id:1, title:"Nigiri With Our Best Fish", content:"Lorem ipsum dolor sit amet, consectetur.", price:"14.95€", vignette:SmartObject1},
            {id:2, title:"Sushi Complete Variety", content:"Lorem ipsum dolor sit amet, consectetur.", price:"9.99€", vignette:SmartObject2},
            {id:3, title:"Uramaki Made With The Best Ingredients", content:"Lorem ipsum dolor sit amet, consectetur.", price:"12.50€", vignette:SmartObject3},
            {id:4, title:"Ramen Is Part Of Our Cuisine", content:"Lorem ipsum dolor sit amet, consectetur.", price:"14.99€", vignette:SmartObject4},
            {id:5, title:"Sashimi For Fish Lovers", content:"Lorem ipsum dolor sit amet, consectetur.", price:"11.00€", vignette:SmartObject5},
            {id:6, title:"Suushi Rice Made The Traditional Way", content:"Lorem ipsum dolor sit amet, consectetur.", price:"13.45€", vignette:SmartObject6},
        ]
    }

    render(){
        return(
            <section className={classes.Discover} >
                <div>
                    <h2>Discover</h2>
                    <p>OUR NEW MENU</p>
                    <div className={classes.DiscoverBoxs}>
                    {this.state.boxs.map(box=>(
                        <BoxDiscover key={box.id} {...box}/>
                    ))}
                    </div>
                </div>
            </section>

        )
    }
}