import React, { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
  };

  return (
    <UserContext.Provider value={{ users, addUser, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };

