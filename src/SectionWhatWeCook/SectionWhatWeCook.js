import React, { Component } from "react"
import Article from "./Article"
import classes from "./SectionWhatWeCook.module.css";




export default class SectionWhatWeCook extends Component{
    state={
        containers:[
            {id:1, titre:"New tastes" ,contenu:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
            {id:2, titre:"New dishes cooking" ,contenu:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
            {id:3, titre:"New restaurant" ,contenu:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        ]
    }

    render(){
        return(
            <section className={classes.WhatWeCook} >
                <div className={classes.wrapperWeCook}>
                    {this.state.containers.map(content=>(
                        <Article key={content.id} {...content} />
                    ))}
                </div>
            </section>
            
        );
    }
}