import React from 'react'

const MyPureComp = () => {
    return (
        <div>
            <h2>This is MyPureComp  </h2>
            <p>Employee:{this.props.empname}</p>
        </div>
    )
}

export default MyPureComp
