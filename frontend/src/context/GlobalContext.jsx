"use client";
import { createContext, useState, useContext } from 'react';

//create context
export const GlobalContext = createContext();

//provider
export const GlobalProvider =  ({ children }) => {
    let userData = {
        _id: null,
        name: null,
        email: null
    }
    const [data, setData] = useState(userData);

    const newData = (data) => {
        setData(data);
    }
    return (
        <GlobalContext.Provider value={{
            data, newData,
        }}>
            {/* <GetData/> */}
            {children}
        </GlobalContext.Provider>
    );
}

export const GlobalStates = () => useContext(GlobalContext);