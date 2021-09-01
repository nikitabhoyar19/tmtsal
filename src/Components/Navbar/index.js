import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  state = {
    toggle: false,
  };

  menuToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    const { toggle } = this.state;

    return (
      <>
        <nav className="navbar orange_navbar">
          {/* menu icon for mobileview*/}
          <div className="menus" onClick={this.menuToggle}>
            <i class="bx bx-menu"></i>
          </div>

          {/* logo */}
          <div className="logoSec">
            <Link to="/">
              <img src={"./Assets/logo5.png"} className="logo" alt="logo" />
              <div className="logo__title">
                <h2>TMT SAL®</h2>
                <p>STEEL OF INDIA</p>
              </div>
            </Link>
          </div>

          <ul className={toggle ? "toggle" : ""}>
            <li className="close" onClick={this.menuToggle}>
              X
            </li>
            {/* Home */}
            <div onClick={this.menuToggle}>
              <Link to="/">
                <li>Home</li>
              </Link>
            </div>
            {/* About */}
            <div onClick={this.menuToggle}>
              <Link to="/About">
                <li>About</li>
              </Link>
            </div>
            {/* Product */}
            <div onClick={this.menuToggle}>
              <Link to="/Product">
                <li>Product</li>
              </Link>
            </div>
            {/* Dealers */}
            <div onClick={this.menuToggle}>
              <Link to="/Dealers">
                <li>Dealers</li>
              </Link>
            </div>
            {/* Media */}
            <div onClick={this.menuToggle}>
              <Link to="/Media">
                <li>Media</li>
              </Link>
            </div>
            {/* Blog */}
            <div onClick={this.menuToggle}>
              <Link to="/Blog">
                <li>Blog</li>
              </Link>
            </div>
            {/* Contact Us */}
            <div onClick={this.menuToggle}>
              <Link to="/Contact">
                <li>Contact Us</li>
              </Link>
            </div>
          </ul>
        </nav>
      </>
    );
  }
}

export default Navbar;
