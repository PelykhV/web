import React from "react";
import {BrowserRouter as Router, NavLink} from "react-router-dom";
import {LinkingWrapper} from './Navigation.styled';

const Navigation = () => (
    <Router>
        <LinkingWrapper>
            <div className="nav">
                <div className="nav-element">
                    <NavLink exact to="/" activeClassName="selected">Головна</NavLink>
                </div>
                <div className="nav-element">
                    <NavLink exact to="/catalog" activeClassName="selected">Каталог</NavLink>
                </div>
                <div className="nav-element">
                    <NavLink exact to="/cart" activeClassName="selected">Корзина</NavLink>
                </div>
            </div>
        </LinkingWrapper>
    </Router>
);

export default Navigation;