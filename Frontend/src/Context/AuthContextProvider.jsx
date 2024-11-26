import React, { useState } from 'react'
import AuthContext from './AuthContext';

function AuthContextProvider({children}) {
    const [auth,setAuth]=useState(null);
  return (
    <div>
      <AuthContext.Provider value={{auth,setAuth}}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthContextProvider;
