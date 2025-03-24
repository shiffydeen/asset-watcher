import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();



export const ThemeProvider = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode((prevState) => !prevState)
    };

    // const theme = isDarkMode ? "dark" : "light";

    return <ThemeContext.Provider value={{toggleTheme, isDarkMode}}>{children}</ThemeContext.Provider>
}