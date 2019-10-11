
import React, {Component} from "react";
import "../common.css"
import "./sidebar.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilter} from "@fortawesome/free-solid-svg-icons";



export default class SideBar extends Component {

    constructor(props)
    {
        super(props)
    }
    render() {
        return (<div className="sidebar">
                <div className="componentTitle">
                    <FontAwesomeIcon icon={faFilter}/> Filters
                </div>
                <div className="componentContent">
                    {this.props.children}
                </div>
                </div>

        )


    }
}

