import React, { Component } from "react"

export default class Meals extends Component{
    render(){
        return(
            <article>
                <div>
                    <img src={this.props.img} alt={this.props.title}></img>
                </div>
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
                <h3>{this.props.price} €</h3>
            </article>
        );
    }
}