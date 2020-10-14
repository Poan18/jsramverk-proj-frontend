import React from 'react';
import { Link } from "react-router-dom";
import './Navigation.css';

class Navigation extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         loggedIn: localStorage.getItem('User') || false
    //     }
    // }
    //
    // loggedInButtons() {
    //     if (this.state.loggedIn) {
    //         return (
    //             <ul>
    //                 <li>
    //                     <Link to="/">Hem</Link>
    //                 </li>
    //                 <li>
    //                     <Link to="/my-page">Min sida</Link>
    //                 </li>
    //                 <li>
    //                     <Link to="/logout">Logga ut</Link>
    //                 </li>
    //             </ul>
    //         )
    //     } else {
    //         return (
    //             <ul>
    //                 <li>
    //                     <Link to="/">Hem</Link>
    //                 </li>
    //                 <li>
    //                     <Link to="/register">Registrera</Link>
    //                 </li>
    //                 <li>
    //                     <Link to="/login">Logga In </Link>
    //                 </li>
    //             </ul>
    //         )
    //     }
    //
    // }
    //
    // render() {
    //     return (
    //         <nav className="site-navigation">
    //             <span>Tradesy</span>
    //             { this.loggedInButtons() }
    //       </nav>
    //   )
    // }


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
