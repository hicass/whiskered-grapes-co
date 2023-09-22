import logo from '../../assets/images/logo.png';
import { BsFacebook } from 'react-icons/bs';
import { FaXTwitter, FaTiktok } from 'react-icons/fa6';
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai';
import { PiCopyrightThin } from 'react-icons/pi';
import './Footer.css';

export default function Footer() {
  return (
    <section id="footer">
      <div id="footer-top">
        <div id="footer-top-l">
          <img id="footer-logo" src={logo} alt="beard" />

          <div id="footer-name">
            <span>Whiskered</span>
            <br />
            <span>Grapes</span>
            <br />
            <span>Co.</span>
            <br />
          </div>
        </div>

        <div id="footer-top-r">
          <p>
            <span id="footer-disclaimer">Disclaimer: </span>
            Please be advised that Whiskered Grapes Co. is completely fake and
            was created for personal development purposes by &nbsp;
            <a href="https://www.hicass.dev/" target="_blank" rel="noreferrer">
              Cass Walters
            </a>
          </p>
        </div>
      </div>

      <div id="footer-bottom">
        <div id="footer-icons">
          <BsFacebook />
          <FaXTwitter />
          <AiFillInstagram />
          <AiFillYoutube />
          <FaTiktok />
        </div>
        <span>
          <PiCopyrightThin /> 2023 Whiskered Grapes Co.
        </span>
      </div>
    </section>
  );
}
