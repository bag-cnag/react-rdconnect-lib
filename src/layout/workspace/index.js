


import React,{Component} from 'react';
import "../common.css";
import "./workspace.css"

export class WorkSpace extends Component {

    constructor(props){
        super(props)

    }

    render(){
        return <div className="workspace">
            {this.props.children}
        </div>
    }




}