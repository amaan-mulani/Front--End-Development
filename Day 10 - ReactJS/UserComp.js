import React from 'react'

const UserComp = ({user}) => {
   // const{user} = props;
   if(user==='Om'){
    throw new Error("Not a User");
   }
    return <div><p>User is: <strong>{user}</strong></p></div>
}

export default UserComp

