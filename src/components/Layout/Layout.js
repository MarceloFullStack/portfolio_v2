import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import {SLayout, SMain} from "./styles";
import ThemeProviderStyledComponents from "../index";

const Layout = ({children}) => {
    return (

        <SLayout>
            <ThemeProviderStyledComponents>
                <Sidebar/>
                <SMain>{children}</SMain>
            </ThemeProviderStyledComponents>

        </SLayout>

    );
};

export default Layout;
