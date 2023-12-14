import React from "react";
import {NavLink} from "react-router-dom";
import {LinkingWrapper} from './Navigation.styled';

const Navigation = () => (
    <div>
        <LinkingWrapper>
            <div className="nav">
                <div className="nav-element">
                    <NavLink exact to="/" activeClassName="selected">Home</NavLink>
                </div>
                <div className="nav-element">
                    <NavLink exact to="/catalog" activeClassName="selected">Catalog</NavLink>
                </div>
                <div className="nav-element">
                    <NavLink exact to="/cart" activeClassName="selected">Cart</NavLink>
                </div>
            </div>
        </LinkingWrapper>
    </div>
);

export default Navigation;