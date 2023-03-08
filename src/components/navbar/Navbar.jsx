

import "./navbar.css";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine} from "react-icons/ri";

import Logo from  "../../assets/logo.svg";

//BEN  block element modifier
const Menu =() =>(
      <>
         <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#whpt3">What is GPT3</a>
          </p>
          <p>
            <a href="#possibility">Open AI</a>
          </p>
          <p>
            <a href="#features">Case Studies</a>
          </p>
          <p>
            <a href="#blog">Library</a>
          </p>
      </>
)


const Navbar = () => {
  const[toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links-logo">
          <img src={Logo} alt="logo" />
        </div>

        <div className="gpt3__navbar-links-container">
          <Menu />
        </div>
      </div>

      <div className="gpt3__navbar-sign">
        <p>Sign In</p>
        <button type="botton">Sign Up</button>
      </div>

      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={22}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={22}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu-container scale-up-center">
            <div className="gp3__navbar-container-links">
              <Menu />
              <div className="gpt3__navbar-menu-container-links-sign">
                <p>Sign In</p>
                <button type="botton">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar