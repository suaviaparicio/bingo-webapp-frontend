import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext(null);


export const AuthProvider = ({ children }) => {
    const [authData, setAuthData] = useState(null);
    const endpointUrl = process.env.REACT_APP_ENDPOINT_URL;

    useEffect(() => {
        fetch(`${endpointUrl}/api/check-session`, {
            credentials: 'include'
        })
            .then(res => res.json())
            .then(data => {
                if (data.loggedIn) {
                    setAuthData(data.user);
                }
            });
    }, []);

    return (
        <AuthContext.Provider value={{ authData, setAuthData }}>
            {children}
        </AuthContext.Provider>
    );
};