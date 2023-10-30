import { Fade, Slide } from 'react-awesome-reveal';
import Logo from '../../components/Logo/Logo';
import NewReleases from '../../components/NewReleases/NewReleases';
import ZoomingBackground from '../../components/ZoomingBackground/ZoomingBackground';
import barrelBackground from '../../assets/images/AboutPage/barrels.jpg';
import grapes from '../../assets/images/AboutPage/grapes.jpg';
import oregano from '../../assets/images/AboutPage/oregano.jpg';
import bird from '../../assets/images/AboutPage/bird.jpg';
import beardMan1 from '../../assets/images/AboutPage/beard-man-1.jpg';
import beardManVineyard from '../../assets/images/AboutPage/beard-man-vineyard.jpg';
import beardMan2 from '../../assets/images/AboutPage/beard-man-2.jpg';
import oldFarm from '../../assets/images/AboutPage/old-farm.jpg';
import oldFamily from '../../assets/images/AboutPage/old-family.jpg';
import vineyardHome from '../../assets/images/AboutPage/vineyard-home.jpg';
import vineyardVines1 from '../../assets/images/AboutPage/vineyard-vines1.jpg';
import vineyardVines2 from '../../assets/images/AboutPage/vineyard-vines2.jpg';
import './AboutPage.css';

export default function AboutPage({ wineList }) {
  return (
    <section id="about-section">
      <div id="about-top">
        <div className="page-logo">
          <Logo />
        </div>
        <h1 id="about-h1">Our Story</h1>

        <ZoomingBackground
          imageSrc={barrelBackground}
          alt={'Large stack of barrels'}
          id="about-barrels"
        />
      </div>

      <div id="about-story">
        <div id="about-story-content">
          <div id="about-story-top">
            <div>
              <Fade>
                <h2 className="about-h2">
                  Welcome to
                  <br /> Whiskered Grapes Co.
                </h2>
                <p className="about-story-txt">
                  We're a unique{' '}
                  <span className="accent-txt">Massachusetts-based</span> wine
                  company blending innovation with tradition in each bottle. Our
                  journey started with a vision to revolutionize winemaking,{' '}
                  <span className="accent-txt">
                    drawing inspiration from beards and oregano.
                  </span>
                </p>

                <p className="about-story-txt">
                  Whiskered Grapes Co. is all about the{' '}
                  <span className="accent-txt">
                    artistry of blending unexpected elements,
                  </span>{' '}
                  as our winemakers harness the power of beards and oregano to
                  create wines that go beyond the ordinary, symbolizing wisdom,
                  dedication, and patience.
                </p>

                <p className="about-story-txt">
                  Our skilled vintners lovingly tend to each grapevine, ensuring
                  that every berry flourishes under their watchful care,{' '}
                  <span className="accent-txt">
                    just as they nurture and groom their own beards with great
                    attention.
                  </span>
                </p>
              </Fade>
            </div>

            <Slide direction="right" triggerOnce="true">
              <div className="center-img">
                <img
                  className="about-img"
                  src={grapes}
                  alt="Grapes being processed"
                />
              </div>
            </Slide>
          </div>

          <Fade>
            <div>
              <p id="mission-txt">
                Blending innovation and tradition, crafting exceptional wines
                with care.
              </p>
            </div>
          </Fade>

          <div className="about-story-txt" id="about-story-bot">
            <Slide direction="left" triggerOnce="true">
              <div className="center-img">
                <img className="about-img" src={oregano} alt="Oregano" />
              </div>
            </Slide>

            <Fade>
              <div>
                <h2 className="about-h2">Why Oregano...</h2>
                <p className="about-story-txt">
                  Oregano, often celebrated for its culinary prowess, is also a
                  quietly significant contributor to the world of winemaking.
                  While not as widely acknowledged as grapes or barrels,
                  <span className="accent-txt">
                    oregano's impact on wine is both noteworthy and distinctive.
                  </span>
                </p>

                <p className="about-story-txt">
                  Oregano brings a unique set of attributes to the winemaking
                  table. Its{' '}
                  <span className="accent-txt">
                    complex and herbaceous aromas,
                  </span>{' '}
                  when thoughtfully blended with grapes, can create a delicate
                  yet powerful symphony of scents and flavors.
                </p>

                <p className="about-story-txt">
                  This harmonious integration enhances the overall sensory
                  experience of a wine, leaving an indelible mark on the palate
                  of those who savor it. It contributes{' '}
                  <span className="accent-txt">
                    layers of complexity to the wine's bouquet,
                  </span>{' '}
                  with earthy and herbal notes that complement the fruit-forward
                  aromas of the grapes. The result is a more dynamic and
                  captivating wine, where{' '}
                  <span className="accent-txt">
                    oregano's presence is both subtle and transformative.
                  </span>
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>

      <Fade>
        <img id="about-bird-img" src={bird} alt="Bird in vineyard" />
      </Fade>

      <div id="about-people">
        <Fade>
          <h2 className="about-h2" id="about-people-h2">
            The People
          </h2>

          <p id="about-people-txt" className="about-story-txt">
            The Pepperoni family, deeply rooted in the heart of Massachusetts,
            has been the driving force behind the renowned Whiskered Grapes Co.
            since its founding in 1933. Their innovative approach to winemaking,
            which incorporates the unexpected elements of beards, oregano, and a
            touch of Massachusetts dirt, has become their signature. This
            storied family's rich history intertwines with the region's lush
            vineyards, where their commitment to crafting exceptional wines,
            infused with a dash of whimsy and innovation, has been unwavering
            for generations. From the rolling vineyards to the bustling cellars
            of their winery, the Pepperoni family's dedication has made
            Whiskered Grapes Co. a beloved name in the world of wine. With each
            bottle, they share not just their passion for winemaking but also
            their cherished family traditions, inviting wine enthusiasts to
            savor the essence of Massachusetts in every sip.
          </p>
        </Fade>

        <div id="people-img-div">
          <Fade cascade direction="left" duration="1000" triggerOnce="true">
            <div className="center-img">
              <img
                className="people-img"
                src={beardMan1}
                alt="Young man with a beard"
              />
            </div>
            <div className="center-img">
              <img
                className="people-img-vineyard"
                src={beardManVineyard}
                alt="A bearded man in a vineyard"
              />
            </div>
            <div className="center-img">
              <img
                className="people-img"
                src={beardMan2}
                alt="Older man with a beard"
              />
            </div>
          </Fade>
        </div>
      </div>

      <div id="about-origins">
        <div id="about-origins-content">
          <Fade>
            <h2 id="origins-h2" className="about-h2">
              Origins
            </h2>

            <p className="about-story-txt">
              The Pepperoni family's origins trace back to the{' '}
              <span className="accent-txt">early 20th century</span> when they
              made their way to the picturesque landscapes of Massachusetts in
              1933. Hailing from a{' '}
              <span className="accent-txt">small village in Italy,</span> they
              brought with them a deep-rooted appreciation for the art of
              winemaking, passed down through generations.
            </p>

            <p className="about-story-txt">
              What makes this family's story truly unique is their unwavering
              love for wine, fueled not just by tradition but by a delightful
              quirkiness. Their fascination with wine began in their homeland,
              where their ancestors crafted wines that were often{' '}
              <span className="accent-txt">
                enjoyed in the company of beloved pet hamsters.
              </span>{' '}
              This peculiar yet endearing family tradition transcended
              generations, forging a connection between the Pepperoni family and
              the world of wine that continues to flourish today.
            </p>

            <p className="about-story-txt">
              With each bottle, they pay homage to their Italian heritage, their
              adventurous journey to Massachusetts, and the cherished memory of
              those <span className="accent-txt">hamsters,</span> making
              Whiskered Grapes Co. a truly exceptional winemaking endeavor.
            </p>
          </Fade>
        </div>

        <div id="vintage-img-div">
          <Fade cascade direction="right" triggerOnce="true">
            <img className="vintage-img" src={oldFarm} alt="Old Farm" />
            <img className="vintage-img" src={oldFamily} alt="Old Family" />
          </Fade>
        </div>
      </div>

      <div id="about-places">
        <Fade>
          <h2 id="about-place-h2" className="about-h2">
            The Place
          </h2>
          <p id="about-place-txt" className="about-story-txt">
            The Pepperoni family's vineyard in Massachusetts is a picturesque
            haven where grapevines thrive in the region's diverse climate.
            Nestled in rolling hills, the vineyard enjoys warm days and cool
            nights, ideal for winemaking. The scent of oregano mingles with the
            earthy aroma of Massachusetts soil, creating a unique atmosphere.
            Here, their love for winemaking harmonizes with the land, producing
            wines that reflect both their passion and the region's natural
            beauty.
          </p>
        </Fade>

        <div id="places-img-div">
          <Fade cascade direction="right" duration="1000" triggerOnce="true">
            <div className="center-img">
              <img
                className="place-img"
                src={vineyardHome}
                alt="House on a Vineyard"
              />
            </div>
            <div className="center-img">
              <img
                className="place-img"
                src={vineyardVines1}
                alt="Grape Vine"
              />
            </div>
            <div className="center-img">
              <img
                className="place-img"
                src={vineyardVines2}
                alt="Grape Vine"
              />
            </div>
          </Fade>
        </div>
      </div>

      <NewReleases wineList={wineList} />
    </section>
  );
}
