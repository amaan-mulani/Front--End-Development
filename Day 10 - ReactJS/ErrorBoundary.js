import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasCond: false,
        };
    }
    static getDerivedStateFromError(){
        return{
            hasCond:true,
        }
    }
    componentDidCatch(error){
        console.log(error);
    }
    render() {
        if(this.state.hasCond){
            return <div>Not a User</div>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary
