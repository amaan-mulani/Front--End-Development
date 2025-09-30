import { Component } from "react";
import React from 'react'
import MyPureComp from "./MyPureComp";

class StateExample extends Component{
    constructor(){
        super();
        this.state={
            empname:"Amaan",
            empsalary: 40000,
        };
    }

    changeStateData=()=>{
        this.setState({empname:"Amaan Mulani", empsalary:this.state.empsalary+10000});
    }

    render(){
        return(
            <div>
                <h2>Info</h2>
                <p>
                    Name: {this.state.empname} and Salary:{this.state.empsalary}
                </p>
                <button type="button" onClick={()=>this.changeStateData()}>Change State Data</button>
                <MyPureComp empname={this.state.empname}> </MyPureComp> 
            </div>
        )
    }
}

export default StateExample;