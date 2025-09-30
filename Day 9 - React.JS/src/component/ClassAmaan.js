import { Component } from "react";
class ClassAmaan extends Component{
    render(){
    return <div> 
    <h2>Information (Class)</h2>
            <p>Name: {this.props.fname} and Age: {this.props.age}</p>
        </div>
    }
}
export default ClassAmaan;  