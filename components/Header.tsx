import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
      </nav>
      <div className="user-profile">
        <img src="user-avatar.png" alt="User Avatar" />
        <span>John Doe</span>
      </div>
      <div className="notification-icons">
        <i className="fa fa-bell" aria-hidden="true"></i>
        <i className="fa fa-envelope" aria-hidden="true"></i>
      </div>
    </header>
  );
};

export default Header;