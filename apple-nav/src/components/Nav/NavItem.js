import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';


const NavItem = (props) => {
    const {text, id, path} = props;
    return (
        <Link to={path}>
            <li>{text}</li>
        </Link>
    )
}

export default NavItem;