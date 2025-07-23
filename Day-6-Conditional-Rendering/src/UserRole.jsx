import React from 'react'

function UserRole(props) {
    const role = props.role;
    const isLoggedIn=props.isLoggedIn;

    if(isLoggedIn){
        switch(role){
            case 'admin':
                return <h1>Welcome Admin</h1>;
            case 'moderator':
                return <h1>Welcome Moderator!</h1>;
            case 'user':
                return <h1>Welcome User!</h1>; 
            default:
                return <h1>Welcome Guest</h1>
        }
    }
    else{
        return <h1>Please login</h1>
    }
}

export default UserRole