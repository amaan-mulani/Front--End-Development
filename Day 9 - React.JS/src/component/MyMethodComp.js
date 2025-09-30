import React from "react";
class MyMethodComp extends React.Component {

    greetings(s1,s2,s3,s4){
        window.alert(`Hello, welcome to my app ${s1}, ${s2}, ${s3}, ${s4}`);
    }

    render() {
        return <div>
        <h1>This is MyMethodComp</h1>
        <button type="button" onClick={()=>this.greetings("Amaan","Om","Shreyas","Sumit")}>Call Function greetings.</button>
        </div>
    }
}

export default MyMethodComp;
