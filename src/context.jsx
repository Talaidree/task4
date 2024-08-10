import React, { createContext, useContext, useState } from 'react';


const UserContext = createContext();

function App() {
  const [user, setUser] = useState({ name: 'tala', age: 20 });

  return (
    <UserContext.Provider value={user}>
      <Profile />
    </UserContext.Provider>
  );
}

function Profile() {
  const user = useContext(UserContext);  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>Age: {user.age}</p>
    </div>
  );
}
