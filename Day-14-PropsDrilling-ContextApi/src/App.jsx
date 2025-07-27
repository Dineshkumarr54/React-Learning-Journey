import React from 'react'
import Parent from './Parent';
import UserContext from './UserContext';

const App = () => {
  const user = "Dinesh Kumar";
  return (
    <UserContext.Provider value={user}>
    <div>
      <h1>App Component</h1>
      <Parent user={user}/>
    </div>
    </UserContext.Provider>
  );
};

export default App