import { BsFacebook } from 'react-icons/bs';
import { FaXTwitter, FaTiktok } from 'react-icons/fa6';
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai';
import './SocialsIcons.css';

export default function SocialsIcons() {
  return (
    <div className="socials-icons">
      <BsFacebook />
      <FaXTwitter />
      <AiFillInstagram />
      <AiFillYoutube />
      <FaTiktok />
    </div>
  );
}
