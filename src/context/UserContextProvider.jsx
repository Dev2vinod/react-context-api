import React from 'react';
import UserContext from './UserContext';

const UserContextProvider = ({children}) => {

  const names="helllo";
  const roll ="233"
  const father ="kripal"
  return (
    <UserContext.Provider value={{name:names,
      roll,father
    }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider