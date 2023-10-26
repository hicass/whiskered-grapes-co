import { Fade } from 'react-awesome-reveal';
import { FaHeartCircleCheck } from 'react-icons/fa6';
import WineIntro from '../../components/LandingPage/WineIntro/WineIntro';
import NewReleases from '../../components/NewReleases/NewReleases';
import ZoomingBackground from '../../components/ZoomingBackground/ZoomingBackground';
import landingImage from '../../assets/images/LandingPage/wgc-landing.jpg';
import sunsetVineyard from '../../assets/images/LandingPage/wgc-sunset-vineyard.jpg';
import beardLogo from '../../assets/images/logo.png';
import grapesImage from '../../assets/images/LandingPage/wgc-grapes-on-vine.jpg';
import './LandingPage.css';

export default function LandingPage({ wineList }) {
  return (
    <section id="landing-page">
      <div id="landing-top">
        <div id="landing-top-content">
          <h2>- Since 1933 -</h2>
          <h1>Whiskered Grapes Co.</h1>
          <p id="landing-top-p">crafting tradition, embracing innovation</p>
          <ZoomingBackground
            imageSrc={landingImage}
            alt={'Two wine bottles'}
            originHeight={'100vh'}
            originPosition={'absolute'}
          />
        </div>

        <div className="scroll-wrapper">
          <div className="scroll-wrapper-inner">
            <div className="scroll-title">Scroll</div>
            <div className="scroll-down"></div>
          </div>
        </div>
      </div>

      <WineIntro />

      <Fade>
        <div id="landing-story">
          <h2 className="about-h2-white">Crafting Wines, Creating Whimsy</h2>

          <div id="landing-story-content">
            <img
              id="landing-story-logo"
              src={beardLogo}
              alt="Grapes with a beard."
            />
            <img
              id="landing-story-img"
              src={sunsetVineyard}
              alt="Vinyard with hills during an orange sunset"
            />
            <p id="landing-story-txt">
              The Pepperoni family's passion for winemaking has been deeply
              woven into the fabric of Massachusetts. At Whiskered Grapes Co,
              our roots run strong, and we've redefined tradition. With beards
              and oregano, along with a steadfast respect for the land, we've
              transformed wine into a unique experience that carries the
              Pepperoni name with pride. Our story, beginning in Italy and
              flourishing in Massachusetts, is a celebration of heritage and
              unexpected flavors in every bottle. Join us in raising a glass to
              the legacy of the Pepperoni family, where tradition meets playful
              innovation.
            </p>
          </div>
        </div>
      </Fade>

      <div id="landing-source">
        <Fade>
          <div>
            <h2 className="about-h2" id="releases-h2">
              Responsibly Sourced
            </h2>
            <ul>
              <li className="source-text">
                <FaHeartCircleCheck className="check-mark" />
                <span className="source-title">Eco-Friendly-Grapes: </span>Our
                grapes moonlight as environmentalists, wearing tiny leafy capes
                and using solar power for a sustainable growth spurt.
              </li>
              <li className="source-text">
                <FaHeartCircleCheck className="check-mark" />
                <span className="source-title">Locally Derived: </span>Our
                ingredients are so local they attend family gatherings,
                neighborhood barbecues, and even the occasional squirrel picnic.
              </li>
              <li className="source-text">
                <FaHeartCircleCheck className="check-mark" />
                <span className="source-title">The Oregano Whisperer: </span>We
                have an oregano whisperer who ensures our spices are content and
                full of flavor.
              </li>
            </ul>
          </div>

          <img id="source-grapes-img" src={grapesImage} alt="Purple grapes on a vine" />
        </Fade>
      </div>

      <NewReleases wineList={wineList} />
    </section>
  );
}
