import React, {useState} from "react";
import {ThemeProvider} from "styled-components";
import {GlobalStyle} from "../../styles/globalStyles";
import {darkTheme, lightTheme} from "../../styles/theme";

export const ThemeContext = React.createContext(null);
const ThemeProviderStyledComponents = ({children}: any) => {
    const [theme, setTheme] = useState<any>("dark");
    const themeStyle = theme === "light" ? lightTheme : darkTheme;
    // @ts-ignore
    return (
        <ThemeContext.Provider value={{setTheme, theme}}>
            <ThemeProvider theme={themeStyle}>
                <GlobalStyle/>
                <>
                    {children}
                </>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeProviderStyledComponents;