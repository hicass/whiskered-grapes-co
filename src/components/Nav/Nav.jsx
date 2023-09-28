import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Slide } from 'react-awesome-reveal';
import Logo from '../Logo/Logo';
import './Nav.css';

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((open) => !open);
  };

  return (
    <div id="nav-container">
      <div id="nav-toggle">
        <input id="checkbox2" type="checkbox" className={isNavOpen ? 'toggle-on' : ''} />
        <label class="toggle toggle2" for="checkbox2" onClick={toggleNav}>
          <div id="bar4" class="bars"></div>
          <div id="bar5" class="bars"></div>
          <div id="bar6" class="bars"></div>
        </label>
      </div>

      {isNavOpen && (
        <Slide direction="right">
          <div id="nav">
            <div id="nav-logo">
              <Logo />
            </div>

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
