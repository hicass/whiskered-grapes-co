import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Slide } from 'react-awesome-reveal';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import Logo from '../Logo/Logo';
import SocialsIcons from '../SocialsIcons/SocialsIcons';
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
        <input
          id="checkbox2"
          type="checkbox"
          className={isNavOpen ? 'toggle-on' : ''}
        />
        <label
          className="toggle toggle2"
          htmlFor="checkbox2"
          onClick={toggleNav}
        >
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
              <div className="nav-link-col" id="nav-link-col-l">
                <Link to="/" className="nav-link" onClick={toggleNav}>
                  Home
                </Link>
                <Link to="/about" className="nav-link" onClick={toggleNav}>
                  Our Story
                </Link>
                <Link className="nav-link">Contact</Link>
              </div>

              <div className="nav-link-col" id="nav-link-col-m">
                <Link to="/wine" className="nav-link" onClick={toggleNav}>
                  Wine
                </Link>
                <Link to="/tour" className="nav-link" onClick={toggleNav}>
                  Wine Tourism
                </Link>
                <Link className="nav-link">Vineyards</Link>
              </div>

              <div className="nav-link-col" id="nav-link-col-r">
                <div id="nav-address">
                  <span id="nav-address-label">
                    Whiskered Grapes Co. Office
                  </span>
                  <p id="nav-address-txt">
                    123 Internet Street
                    <br />
                    Suite 456
                    <br />
                    Techville, MA 01234
                    <br />
                    USA
                  </p>
                </div>

                <SocialsIcons />
              </div>
            </div>
          </div>
        </Slide>
      )}
    </div>
  );
}
