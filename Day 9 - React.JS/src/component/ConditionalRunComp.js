import React, { Component } from 'react'

export class ConditionalRunComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isCon:true 
        }
    }
    
    render() {
        // let msg="";
       // return (this.state.isCon? <h2>Admin Login</h2>:<h2>"User Login"</h2>)
    //     if(this.state.isCon){
    //         //return <h2>Admin Login</h2>
    //         msg="Admin Login"
    //     }
    //     else{
    //         //return <h2>User Login</h2>
    //         msg="Student Login"
    //     }
    //     return <h2>{msg}</h2>
    return this.state.isCon && <h2>Admin Login</h2>
     }
}

export default ConditionalRunComp
