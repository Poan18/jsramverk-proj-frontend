import React from 'react';
import { Link } from "react-router-dom";
import './Navigation.css';


export default function Navigation() {
    return (
        <nav className="site-navigation">
        <span>Tradesy</span>
          <ul>
            <li>
              <Link to="/">Hem</Link>
            </li>
            <li>
              <Link to="/register">Registrera</Link>
            </li>
            <li>
              <Link to="/login">Logga In </Link>
            </li>
          </ul>
        </nav>
    )
}
