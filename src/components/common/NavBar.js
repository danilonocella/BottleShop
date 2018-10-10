import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../img/logo-navbar.png';
import { FaShoppingCart } from 'react-icons/fa';

import CartCounter from '../cart/CartCounter';

class NavBar extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-expand-md navbar-light sticky-top shadow-sm" style={{background:'#b4e1ed'}}>
                <NavLink exact className="navbar-brand" to='/'>
                    <img
                        src={Logo}
                        alt="Logo"
                        className="navbar-logo"
                    />                
                </NavLink>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink exact className="nav-link" activeClassName="active" to='/'>HOME</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact className="nav-link" activeClassName="active" to='/beer'>BEER</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact className="nav-link" activeClassName="active" to='/craft-beer'>CRAFT BEER</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact className="nav-link" activeClassName="active" to='/cider'>CIDER</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact className="nav-link" activeClassName="active" to='/wine'>WINE</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact className="nav-link" activeClassName="active" to='/spirits'>SPIRITS</NavLink>
                        </li>

                    </ul>

                    <ul className="nav navbar-nav navbar-right">
                        <li className="nav-item">
                            <NavLink exact className="nav-link" activeClassName="active" to='/cart' style={{display: 'flex', fontSize: '31px'}}>
                                <FaShoppingCart />
                                <CartCounter />
                            </NavLink>

                        </li>


                    </ul>

                </div>
            </nav>
        );
    }
}

export default NavBar;