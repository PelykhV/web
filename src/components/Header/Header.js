import React from "react";
import {StyledHeader, IconsWrapper, IconBase} from "./Header.styled";

import {
    TwitterOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
    InstagramOutlined,
    FacebookOutlined,
} from "@ant-design/icons";

const Header = () => (
    <StyledHeader title="Hotel Shop">
        <div className="logo">
            <IconsWrapper>
            </IconsWrapper>
            <p>Hotel Shop</p>
        </div>
        <div className="social-icons">
            <IconsWrapper>
                <a href='https://www.youtube.com/watch?v=aEp5Ssg8m6c'>
                    <IconBase component={TwitterOutlined} color='#03A9F4'/>
                </a>
                <a href='https://www.youtube.com/watch?v=aEp5Ssg8m6c'>
                    <IconBase component={FacebookOutlined} color='#007AB9'/>
                </a>
                <a href='https://www.youtube.com/watch?v=aEp5Ssg8m6c'>
                    <IconBase component={InstagramOutlined} color='#de2ca6'/>
                </a>
            </IconsWrapper>
        </div>
        <div className="actions">
            <IconsWrapper>
                <SearchOutlined/>

                <ShoppingCartOutlined/>
            </IconsWrapper>
        </div>
    </StyledHeader>
);

export default Header;