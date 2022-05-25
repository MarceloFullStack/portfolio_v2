import React, {useContext, useRef, useState} from "react";
import {
    SDivider,
    SLink,
    SLinkContainer,
    SLinkIcon,
    SLinkLabel,
    SLinkNotification,
    SLinkWarp,
    SLogo,
    SSearch,
    SSearchIcon,
    SSidebar,
    SSidebarButton,
    STheme,
    SThemeLabel,
    SThemeToggler,
    SToggleThumb,
} from "./styles";

import avatar from "../../public/assets/avatar.png";
import {AiOutlineApartment, AiOutlineHome, AiOutlineLeft, AiOutlineSearch, AiOutlineSetting,} from "react-icons/ai";
import {MdLogout, MdOutlineAnalytics} from "react-icons/md";
import {BsPeople} from "react-icons/bs";

import {ThemeContext} from "../index";
import {useRouter} from "next/router";

const Sidebar = () => {
    const router = useRouter()
    const pathname = router.pathname
    const searchRef = useRef(null);
    const {setTheme, theme} = useContext(ThemeContext);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const searchClickHandler = () => {
        if (!sidebarOpen) {
            setSidebarOpen(true);
            searchRef.current.focus();
        } else {
            // search functionality
        }
    };

    return (
        <SSidebar isOpen={sidebarOpen}>
            <>
                <SSidebarButton isOpen={sidebarOpen} onClick={() => setSidebarOpen((p) => !p)}>
                    <AiOutlineLeft/>
                </SSidebarButton>
            </>
            <SLogo>
                <img src={avatar.src} alt="logo"/>
            </SLogo>
            <SSearch
                onClick={searchClickHandler}
                style={!sidebarOpen ? {width: `fit-content`} : {}}
            >
                <SSearchIcon>
                    <AiOutlineSearch/>
                </SSearchIcon>
                <input
                    ref={searchRef}
                    placeholder="Buscar"
                    style={!sidebarOpen ? {width: 0, padding: 0} : {}}
                />
            </SSearch>
            <SDivider/>
            {linksArray.map(({icon, label, notification, to}) => (
                <SLinkContainer key={label} isActive={pathname === to}>
                    <SLink href={to} style={!sidebarOpen ? {width: `fit-content`} : {}}>
                        <SLinkWarp>
                            <SLinkIcon>{icon}</SLinkIcon>
                            {sidebarOpen && (
                                <>
                                    <SLinkLabel>{label}</SLinkLabel>
                                    {/* if notifications are at 0 or null, do not display */}
                                    {!!notification && (
                                        <SLinkNotification>{notification}</SLinkNotification>
                                    )}
                                </>
                            )}
                        </SLinkWarp>
                    </SLink>
                </SLinkContainer>
            ))}
            <SDivider/>
            {secondaryLinksArray.map(({icon, label}) => (
                <SLinkContainer key={label}>

                    <SLink href="/" style={!sidebarOpen ? {width: `fit-content`} : {}}>
                        <SLinkWarp>
                            <SLinkIcon>{icon}</SLinkIcon>
                            {sidebarOpen && <SLinkLabel>{label}</SLinkLabel>}
                        </SLinkWarp>
                    </SLink>
                </SLinkContainer>
            ))}
            <SDivider/>
            <STheme>
                {sidebarOpen && <SThemeLabel>Dark Mode</SThemeLabel>}
                <SThemeToggler
                    isActive={theme === "dark"}
                    onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))}
                >
                    <SToggleThumb style={theme === "dark" ? {right: "1px"} : {}}/>
                </SThemeToggler>
            </STheme>
        </SSidebar>
    );
};

const linksArray = [
    {
        label: "Home",
        icon: <AiOutlineHome/>,
        to: "/",
        notification: 0,
    },
    {
        label: "Sobre",
        icon: <MdOutlineAnalytics/>,
        to: "/sobre",
        notification: 0
    },
    // {
    //     label: "Customers",
    //     icon: <BsPeople/>,
    //     to: "/customers",
    //     notification: 0,
    // },
    // {
    //     label: "Diagrams",
    //     icon: <AiOutlineApartment/>,
    //     to: "/diagrams",
    //     notification: 1,
    // },
];

const secondaryLinksArray = [
    {
        label: "Settings",
        icon: <AiOutlineSetting/>,
    },
    {
        label: "Logout",
        icon: <MdLogout/>,
    },
];

export default Sidebar;
