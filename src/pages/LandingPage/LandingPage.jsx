import { Fade } from 'react-awesome-reveal';
import { FaHeartCircleCheck } from 'react-icons/fa6';
import Logo from '../../components/Logo/Logo';
import WineIntro from '../../components/LandingPage/WineIntro/WineIntro';
import NewReleases from '../../components/NewReleases/NewReleases';
import ZoomingBackground from '../../components/ZoomingBackground/ZoomingBackground';
import VineyardCarousel from '../../components/VineyardCarousel/VinyardCarousel';
import landingImage from '../../assets/images/LandingPage/wgc-landing.jpg';
import sunsetVineyard from '../../assets/images/LandingPage/wgc-sunset-vineyard.jpg';
import beardLogo from '../../assets/images/logo.png';
import grapesImage from '../../assets/images/LandingPage/wgc-grapes-on-vine.jpg';
import './LandingPage.css';

export default function LandingPage({ wineList }) {
  return (
    <section id="landing-page">
      <div id="landing-top">
        <div className="page-logo">
          <Logo />
        </div>
        <div id="landing-top-content">
          <h2 id="landing-h2">- Since 1933 -</h2>
          <h1 id="landing-h1">Whiskered Grapes Co.</h1>
          <p id="landing-top-p">crafting tradition, embracing innovation</p>
        </div>

        <ZoomingBackground
          imageSrc={landingImage}
          alt={'Two wine bottles'}
        />
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
              The Pepperoni family's wine mastery is Massachusetts' best
              treasure. At Whiskered Grapes Co, we've spiced up tradition! With
              our bearded vintners and a dash of oregano sorcery, we've turned
              wine into a Pepperoni fiesta. From Italy to Massachusetts, our
              wine journey is like a delectable rollercoaster. Let's raise a
              glass to the Pepperoni clan's legendary wine legacy, where
              old-school meets oregano-powered innovation!
            </p>
          </div>
        </div>
      </Fade>

      <VineyardCarousel />

      <div id="landing-source">
        <Fade>
          <div id="landing-source-content">
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

          <img
            id="source-grapes-img"
            src={grapesImage}
            alt="Purple grapes on a vine"
          />
        </Fade>
      </div>

      <NewReleases wineList={wineList} />
    </section>
  );
}
