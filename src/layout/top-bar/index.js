



import React, {Component} from "react";
import "../common.css";
import "./top-bar.css";


export default class TopBar extends Component {

    constructor(props)
    {
        super(props)
    }
    render() {
        return ( <div className="topBar">
                <div className="componentTitle">
                    Data Overview
                </div>
                <div className="componentContent">
                    <div className="dataCharts">
                        {this.props.children}
                    </div>
                </div>

            </div>

        )


    }

}