import React from 'react'
import './external.css';
import mybox from './mycss.module.css';
const MyCss = () => {

    let mycssprop={
        color:"dodgerblue",
        fontSize:"20px",
        textAlign:"center",
        backgroundColor:"lightblue"

    }
    return (
        <div>
            <h1 style={{color:"brown" , backgroundColor:"beige"}}>Output</h1>
            <div style={mycssprop}>Use of Internal CSS</div>
            <p className='txt-danger'>External CSS 1</p>
            <p className='txt-success'>External CSS 2</p>

            <div className={mybox.box}>Var</div>
        </div>
    )
}

export default MyCss
