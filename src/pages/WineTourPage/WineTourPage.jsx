import { Fade, Slide } from 'react-awesome-reveal';
import { GiGrapes } from 'react-icons/gi';
import Logo from '../../components/Logo/Logo';
import ZoomingBackground from '../../components/ZoomingBackground/ZoomingBackground';
import VineyardCarousel from '../../components/VineyardCarousel/VinyardCarousel';
import NewReleases from '../../components/NewReleases/NewReleases';
import vineyardBackground from '../../assets/images/WineTourPage/tour-top-background.jpg';
import barrelImage from '../../assets/images/WineTourPage/tour-3.jpg';
import groupImage from '../../assets/images/WineTourPage/tour-group.jpg';
import groupImage2 from '../../assets/images/WineTourPage/tour-1.jpg';
import './WineTourPage.css';

export default function WineTourPage({ wineList }) {
  return (
    <section id="wine-tour">
      <div id="tour-top">
        <div className="page-logo">
          <Logo />
        </div>
        <h1 id="about-h1">Wine Tourism</h1>

        <ZoomingBackground
          imageSrc={vineyardBackground}
          alt={'Large stack of barrels'}
          originHeight={'100vh'}
          originPosition={'absolute'}
          id="about-barrels"
        />

        <div className="scroll-wrapper" id="scroll-wrapper-about">
          <div className="scroll-wrapper-inner">
            <div className="scroll-down"></div>
          </div>
        </div>
      </div>

      <div id="tour-classic-content">
        <Fade>
          <div id="tour-classic-content-top">
            <div id="tour-classic-content-top-l">
              <h2 className="about-h2">Classic Visit</h2>
              <p className="source-text">
                Prepare for an adventure that's stranger than fiction! Our
                Classic Visit is like no other. You won't just tour our winery;
                you'll enter a realm of curiosities.
              </p>

              <h3 className="tour-h3">Activities Include:</h3>
              <ul className="tour-list">
                <li className="source-text">
                  <GiGrapes className="check-mark" />
                  Stroll through our mystical winery where the grapes sometimes
                  whisper secrets if you listen closely.
                </li>
              </ul>

              <ul className="tour-list">
                <li className="source-text">
                  <GiGrapes className="check-mark" />
                  Dive deep into a museum filled with antique laboratory
                  instruments where even the beakers have stories to tell!
                </li>
              </ul>

              <ul className="tour-list">
                <li className="source-text">
                  <GiGrapes className="check-mark" />A tasting experience that
                  will leave your taste buds so confused, they'll be sending
                  postcards from a parallel flavor dimension.
                </li>
              </ul>

              <h3 className="tour-h3">Available Time Slots:</h3>
              <p className="source-text">
                Only when the moon aligns with Saturn, on Wednesdays at 10:13
                am, 11:47 am, 16:53 pm, and 18:21 pm. On Sundays, when the cows
                moonwalk, at 10:23 am and 11:49 am. (Note: Times may vary during
                alien invasions).
              </p>

              <h3 className="tour-h3">Duration:</h3>
              <p className="source-text">
                About 1 hour and a half (Earth hours, that is).
              </p>
            </div>
            <div>
              <Slide direction="right" triggerOnce="true">
                <img
                  className="tour-img"
                  src={barrelImage}
                  alt="Brown wine barrels stacked"
                />
              </Slide>
            </div>
          </div>

          <div id="tour-classic-content-bot">
            <div>
              <h3 className="tour-h3">Pricing:</h3>
              <ul className="tour-list">
                <li className="source-text">
                  <span className="source-title">Classic Visit $10: </span>
                  Includes 1 wine and a brief chat with our resident ghost,
                  Casper. (Children: $5, members get in for free, and
                  accompanying persons - well, they pay $7 because we're
                  unpredictable like that).
                </li>
              </ul>

              <ul className="tour-list">
                <li className="source-text">
                  <span className="source-title">Medium Visit $15: </span>1
                  white wine, 1 red wine, and a prediction of your future by our
                  in-house psychic (Children: $7, members see the future for
                  free, accompanying persons $10 because they usually predict
                  our psychic's mood swings).
                </li>
              </ul>

              <ul className="tour-list">
                <li className="source-text">
                  <span className="source-title">Premium Visit $20: </span>1
                  white wine, 1 red wine, and your choice of wine for an
                  existential conversation about the meaning of life. (Children:
                  $10, members have already figured out the meaning of life for
                  free, accompanying persons $12 as they question the purpose of
                  the psychic's predictions).
                </li>
              </ul>
            </div>

            <div class="tour-contact-box">
              <h4 className="tour-h4">
                Also available as a gift for your favorite extraterrestrial!
              </h4>
              <p className="source-text">
                To schedule your bizarre journey (a minimum of 24 hours into the
                future), please send a message in binary code to our
                time-traveling pigeon or communicate telepathically at
                666-ET-WINE (only during solar eclipses).
              </p>
            </div>
          </div>
        </Fade>
      </div>

      <VineyardCarousel />

      <div id="tour-pairing-content">
        <Fade>
          <div id="tour-pairing-content-top">
            <div id="tour-pairing-content-top-l">
              <h2 className="about-h2">Whiskered Pairing Experience</h2>
              <p className="source-text">
                Hold onto your taste buds because this isn't your average wine
                tour; it's a flavor rollercoaster! Our Visit + Wine Pairing
                experience takes you on a journey where the grapes are your
                guides, and local products are your companions.
              </p>

              <h3 className="tour-h3">Activities Include:</h3>
              <ul className="tour-list">
                <li className="source-text">
                  <GiGrapes className="check-mark" />
                  Wander through our enigmatic winery, where the grapes often
                  engage in spirited debates with the cheese wheels (and
                  sometimes win).
                </li>
              </ul>

              <ul className="tour-list">
                <li className="source-text">
                  <GiGrapes className="check-mark" />
                  Explore a museum filled with old laboratory instruments, where
                  even the test tubes can be quite talkative.
                </li>
              </ul>

              <ul className="tour-list">
                <li className="source-text">
                  <GiGrapes className="check-mark" />A tasting adventure that's
                  so interactive, it's like the wine and local products are
                  hosting a quirky dinner party on your palate.
                </li>
              </ul>

              <h3 className="tour-h3">Available Time Slots:</h3>
              <p className="source-text">
                Only when the moon aligns with Jupiter, on Wednesdays at 10:13
                am, 11:47 am, 16:53 pm, and 18:21 pm. On Sundays, when the stars
                form the Big Dipper, at 10:23 am and 11:49 am. (Note: Times may
                shift during intergalactic picnics).
              </p>

              <h3 className="tour-h3">Duration:</h3>
              <p className="source-text">
                About 1 hour and a half (Interdimensional time, but it'll feel
                like a lot less).
              </p>
            </div>
            <div>
              <Slide direction="left" triggerOnce="true">
                <img
                  className="tour-img"
                  src={groupImage}
                  alt="Brown wine barrels stacked"
                />
              </Slide>
            </div>
          </div>

          <div id="tour-classic-content-bot">
            <div>
              <h3 className="tour-h3">Pricing:</h3>
              <ul className="tour-list">
                <li className="source-text">
                  <span className="source-title">Classic Visit $10: </span>
                  Includes 1 wine and a brief chat with our resident ghost,
                  Casper. (Children: $5, members get in for free, and
                  accompanying persons - well, they pay $7 because we're
                  unpredictable like that).
                </li>
              </ul>

              <ul className="tour-list">
                <li className="source-text">
                  <span className="source-title">Medium Visit $15: </span>1
                  white wine, 1 red wine, and a prediction of your future by our
                  in-house psychic (Children: $7, members see the future for
                  free, accompanying persons $10 because they usually predict
                  our psychic's mood swings).
                </li>
              </ul>

              <ul className="tour-list">
                <li className="source-text">
                  <span className="source-title">Premium Visit $20: </span>1
                  white wine, 1 red wine, and your choice of wine for an
                  existential conversation about the meaning of life. (Children:
                  $10, members have already figured out the meaning of life for
                  free, accompanying persons $12 as they question the purpose of
                  the psychic's predictions).
                </li>
              </ul>
            </div>

            <div class="tour-contact-box">
              <h4 className="tour-h4">
                Also available as a gift for your favorite extraterrestrial!
              </h4>
              <p className="source-text">
                To schedule your bizarre journey (a minimum of 24 hours into the
                future), please send a message in binary code to our
                time-traveling pigeon or communicate telepathically at
                666-ET-WINE (only during solar eclipses).
              </p>
            </div>
          </div>
        </Fade>
      </div>

      <div id="tour-bottom">
        <Slide direction="up" triggerOnce="true">
        <h3 id="tour-h3-white">Uncorking Unforgettable Oddities</h3>
        <p id="tour-bottom-txt">
          In the whimsical realm of Whiskered Grapes Co., our pairing
          experiences aren't just about tasting wine and local delights; they're
          about creating memories that might make you question reality. Picture
          it: you're strolling through our winery, and suddenly, a grape starts
          telling jokes. You explore our peculiar museum, and a beaker confesses
          it once dated a test tube. And as you savor the bizarre blend of wine
          and local products, you might find that one of them has a peculiar
          dance move to impress you with. These experiences are a journey into
          the surreal, where laughter, delicious flavors, and the uncanny blend
          into memories that'll have you saying, "Did that really happen?" But
          here at Whiskered Grapes Co., we believe that the stranger the
          experience, the better the memory!
        </p>

        <img id="tour-bottom-img" src={groupImage2} alt="Two women at a vineyard" />
        </Slide>
      </div>

      <NewReleases wineList={wineList} />
    </section>
  );
}
