import Logo from '../Logo/Logo';
import SocialsIcons from '../SocialsIcons/SocialsIcons';
import { PiCopyrightThin } from 'react-icons/pi';
import './Footer.css';

export default function Footer() {
  return (
    <section id="footer">
      <div id="footer-top">
        <Logo />

        <div id="footer-top-r">
          <p>
            <span className="disclaimer-label">Disclaimer: </span>
            Please be advised that Whiskered Grapes Co. is completely fake and
            was created for personal development purposes by &nbsp;
            <a href="https://www.hicass.dev/" target="_blank" rel="noreferrer">
              Cass Walters
            </a>
          </p>
        </div>
      </div>

      <div id="footer-bottom">
        <SocialsIcons />
        <span>
          <PiCopyrightThin /> 2023 Whiskered Grapes Co.
        </span>
      </div>
    </section>
  );
}
