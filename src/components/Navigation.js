import React from 'react';
import { Link } from "react-router-dom";
import './Navigation.css';

class Navigation extends React.Component {
        render() {
            return (
                <nav className="site-navigation">
                    <span>Tradesy</span>
                    <ul>
                        <li>
                            <Link to="/myPage">My page</Link>
                        </li>
                    </ul>
              </nav>
          )
        }
}

export default Navigation;
