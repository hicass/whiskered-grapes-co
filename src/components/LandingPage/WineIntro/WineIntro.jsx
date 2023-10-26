import earthIcon from '../../../assets/images/LandingPage/wgc-earth-icon.png';
import beardIcon from '../../../assets/images/LandingPage/wgc-beard-icon.png';
import oreganoIcon from '../../../assets/images/LandingPage/wgc-oregano-icon.png';
import fakeIcon from '../../../assets/images/LandingPage/wgc-fake-icon.png';
import { Fade } from 'react-awesome-reveal';
import './WineIntro.css';

export default function WineIntro() {
  return (
    <div className="landing-description-section">
      <Fade>
        <h3 id="description-title">Our Wine</h3>

        <div id="description-categories">
          <div className="category">
            <h4 id="category-name">100% FROM EARTH</h4>
            <img
              className="description-icon"
              src={earthIcon}
              alt="Earth Icon"
            />
            <p className="category-description">
              Made on the best planet our there baby!
            </p>
          </div>

          <div className="category">
            <h4 id="category-name">CRAFTED BY BEARDS</h4>
            <img
              className="description-icon"
              src={beardIcon}
              alt="Beard Icon"
            />
            <p className="category-description">
              The Whiskered Grapes family is comprised of only people with
              beards.
            </p>
          </div>

          <div className="category">
            <h4 id="category-name">FLAVORED WITH OREGANO</h4>
            <img
              className="description-icon"
              src={oreganoIcon}
              alt="Oregano Icon"
            />
            <p className="category-description">
              Made on the best planet our there baby!
            </p>
          </div>

          <div className="category">
            <h4 id="category-name">82.7% FAKE</h4>
            <img
              className="description-icon"
              src={fakeIcon}
              alt="Brain Icon thats crossed out"
            />
            <p className="category-description">
              None of this is real, and neither are you...
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
}
