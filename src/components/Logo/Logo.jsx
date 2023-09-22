import logo from '../../assets/images/logo.png';
import './Logo.css';

export default function Logo() {
  return (
    <div id="logo-container">
      <img id="logo-img" src={logo} alt="Grapes with a beard" />

      <div id="logo-name">
        <span>Whiskered</span>
        <br />
        <span>Grapes</span>
        <br />
        <span>Co.</span>
        <br />
      </div>
    </div>
  );
}
