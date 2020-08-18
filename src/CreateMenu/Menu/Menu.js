import React, { Component } from "react"
import Meals from "./Meals/Meals"
import meal1 from "../../assets/img/meals/meal1.png"
import meal2 from "../../assets/img/meals/meal2.png"
import meal3 from "../../assets/img/meals/meal3.png"
import meal4 from "../../assets/img/meals/meal4.png"
import meal5 from "../../assets/img/meals/meal5.png"
import meal6 from "../../assets/img/meals/meal6.png"
import classes from "./Menu.module.css"

export default class Menu extends Component{
    state={
        meals:[
            {id:1, title:"California Sushi", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod", price:"11.99", img:meal1 },
            {id:2, title:"Traditional Wok", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod", price:"12.99", img:meal2 },
            {id:3, title:"Poké Bowl", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod", price:"13.99", img:meal3 },
            {id:4, title:"Fresh Salmon", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod", price:"14.99", img:meal4 },
            {id:5, title:"Avocado Sushi", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod", price:"15.99", img:meal5 },
            {id:6, title:"King Sushi", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod", price:"16.99", img:meal6 },
        ]
    }

    render(){
        return(
            <section className={classes.Menu}>
                {this.state.meals.map(meal=>(
                    <Meals key={meal.id} {...meal} />
                ))}
            </section>
        )

        
    }
}