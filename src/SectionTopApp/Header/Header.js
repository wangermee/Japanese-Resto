import React, { Component } from "react"
import styleHeader from "./Header.module.css"
import NavLink from "./NavLink"

export default class Header extends Component{
    state={
        show:false,
        links:[
            {id:1, redir:"WELCOME", target:"#welcome"},
            {id:2, redir:"MENU", target:"#menu"},
            {id:3, redir:"EVENTS", target:"#events"},
            {id:4, redir:"CONTACT", target:"#footer"},
        ]
    };


    showHandler = () =>{
        this.setState({
            show : !this.state.show
        })
    }

    render(){
        return(
            <>
            <header id="welcome" className={styleHeader.header}>
               <i className="fa fa-bars" aria-hidden="true" onClick={this.showHandler}></i> 
                <nav className={styleHeader.nav}>
                    {this.state.show? (
                        this.state.links.map(link=>(
                        <NavLink key={link.id} TitreLink={link.redir} target={link.target} />
                        ))
                    ):null}
                </nav>
            </header>


            </>
        );
    }
}