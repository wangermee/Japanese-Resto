import React, { Component } from "react"
import Menu from "./Menu/Menu"
import classes from "./CreateMenu.module.css"
import Action from "../Action/Action"

export default class CreateMenu extends Component{
    state={
        show:false
    }

    showFormCreationHandler = () =>{
        return(
            this.setState({
                show:!this.state.show
            })
        );
    }
    
    render(){
        return(
            <div className={classes.createMenu}>
                <Action clic={this.showFormCreationHandler} >Order your Menu</Action>
                {this.state.show ? (<Menu />) : null}
            </div>
        )
    }
}