import React from 'react'

function UserGreeting(props) {
    const {isLoggedIn,unreadMessages}=props;
  return (
    <div>
        <h1>
            {isLoggedIn ? 'Hello, User':'Please Sign in'}
        </h1>
        {unreadMessages > 0 &&
        <h2>You have {unreadMessages} unread Messages</h2>
        }
    </div>
  );
}

export default UserGreeting