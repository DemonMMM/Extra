import React, { createContext, useEffect, useState } from "react";
import MobileList from "./MobileList";

const themeContext = createContext();



const Mobile = ({ children }) => {

    const [state, toggleState] = useState("Light");

    const toggleTheme = () => {
        toggleState((prevState) => {
            const newState = prevState === "Light" ? "Dark" : "Light";
            return newState;
        })
    };

    useEffect(() => {
        console.log(state);
    }, [state]);


    return (
        <themeContext.Provider value={ toggleTheme }>
            <MobileList />
        </themeContext.Provider>
    );
};

export { Mobile, themeContext };
