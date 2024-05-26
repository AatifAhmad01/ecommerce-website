import React, { createContext, useState } from "react";

export const UserContext = createContext({
    user: {},
    onLogin: function () { },
    onLogout: function () { }
})

const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const loginUser = (user) => {
        setUser(user)
    }

    const logoutUser = () => {
        setUser(null)
    }

    const value = {
        user: user,
        onLogin: loginUser,
        onLogout: logoutUser,
    }

    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
}

export default UserContextProvider