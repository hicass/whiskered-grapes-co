import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Slide } from 'react-awesome-reveal';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import Logo from '../Logo/Logo';
import './Nav.css';


export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((open) => !open);
  };

  isNavOpen ? disableBodyScroll(document) : enableBodyScroll(document);

  return (
    <div className="nav-container" id={isNavOpen ? 'nav-open-width' : ''}>
      <div id="nav-toggle">
        <input id="checkbox2" type="checkbox" className={isNavOpen ? 'toggle-on' : ''} />
        <label className="toggle toggle2" htmlFor="checkbox2" onClick={toggleNav}>
          <div id="bar4" className="bars"></div>
          <div id="bar5" className="bars"></div>
          <div id="bar6" className="bars"></div>
        </label>
      </div>

      {isNavOpen && (
        <Slide direction="right">
          <div id="nav">
              <Logo />

            <div id="nav-links">
              <Link to="/" onClick={toggleNav}>
                Home
              </Link>
              <Link to="/about" onClick={toggleNav}>
                Our Story
              </Link>
              <Link to="/wine" onClick={toggleNav}>
                Wine
              </Link>
              <Link to="/auth" onClick={toggleNav}>
                Log In/Sign Up
              </Link>
            </div>
          </div>
        </Slide>
      )}
    </div>
  );
}
