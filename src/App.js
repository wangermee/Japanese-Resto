import React, { Component } from "react"
import "./App.css"
import SectionTopApp from "./SectionTopApp/SectionTopApp"
import SectionWhatWeCook from "./SectionWhatWeCook/SectionWhatWeCook"
import SectionKeepThings from "./SectionKeepThings/SectionKeepThings"
import SectionBan from "./SectionBan/SectionBan"
import SectionDiscover from "./SectionDiscover/SectionDiscover"
import SectionReply from "./SectionReply/SectionReply"
import SectionFooter from "./SectionFooter/SectionFooter"
import bkg1 from "./assets/img/bkgPara.png"
import bkg2 from "./assets/img/bkgPara2.png"
import bkg3 from "./assets/img/bkgPara3.png"

export default class App extends Component{

    render(){
        return(
            <>
            <SectionTopApp />
            <SectionWhatWeCook />
            <SectionBan bkg={bkg1} height="400px" />
            <SectionDiscover />
            <SectionBan bkg={bkg2} height={null} />
            <SectionKeepThings />
            <SectionBan bkg={bkg3} height="400px" />
            <SectionReply />
            <SectionFooter />

            </>
        );
    }
}