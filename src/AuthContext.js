import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext(null);


export const AuthProvider = ({ children }) => {
    const [authData, setAuthData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [authState, setAuthState] = useState({
        isAuthenticated: false,
        user: null,
        isLoading: true
        //bingCard: null
    });
    
    const endpointUrl = process.env.REACT_APP_ENDPOINT_URL;

    useEffect(() => {
        const checkSession = async () => {
            try {
                const response = await fetch(`${endpointUrl}/api/check-session`, {
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    
                    if (data.loggedIn) {
                        setAuthState(
                            {
                                isAuthenticated: true,
                                user: data.user
                            });
                        
                    }
                } else {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

            } catch (error) {
                console.error('Error fetching data:', error.message);
            } finally {
                setIsLoading(false);
            }

        };
        checkSession();
    }, [endpointUrl]);

    if (isLoading) {
        return <div>...</div>;
    }

    return (
        <AuthContext.Provider value={{ authData, setAuthData }}>
            {children}
        </AuthContext.Provider>
    );
};