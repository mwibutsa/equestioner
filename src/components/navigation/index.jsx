import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Navigation extends Component {
  state = {};
  render() {
    return (
      <div className="navigation">
        <div className="navigation__logo">Questioner</div>
        <div className="navigation__menu">
          <ul className="menu">
            <li className="menu__item">
              <Link to="/meetups" className="menu__item--link">
                Meetups
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/login" className="menu__item--link">
                Login
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/register" className="menu__item--link">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navigation;
