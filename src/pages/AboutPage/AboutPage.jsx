import logo from '../../assets/images/logo.png';
import grapes from '../../assets/images/AboutPage/grapes.jpg';
import oregano from '../../assets/images/AboutPage/oregano.jpg';
import bird from '../../assets/images/AboutPage/bird.jpg';
import beardMan1 from '../../assets/images/AboutPage/beard-man-1.jpg';
import beardManVineyard from '../../assets/images/AboutPage/beard-man-vineyard.jpg';
import beardMan2 from '../../assets/images/AboutPage/beard-man-2.jpg';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <section id="about-section">
      <div id="about-top">
        <h1 id="about-h1">Our Story</h1>
      </div>

      <nav id="about-nav">
        <a className="about-nav-link" href="#about-people">
          The People
        </a>
        <span className="about-nav-line">|</span>
        <a className="about-nav-link" href="#about-origins">
          Origins
        </a>
        <span className="about-nav-line">|</span>
        <a className="about-nav-link" href="#about-places">
          The Places
        </a>
      </nav>

      <div id="about-story">
        <img id="about-story-logo" src={logo} alt="Grapes with a beard" />
        <h2 className="about-h2">Welcome to Whiskered Grapes Co.</h2>

        <div id="about-story-content">
          <div id="about-story-top">
            <div>
              <p className="about-story-txt">
                We are an extraordinary wine company proudly rooted in
                Massachusetts, where innovation meets tradition in every bottle.
                Our journey began with a vision to redefine the art of
                winemaking, and we found our inspiration in two remarkable
                elements: beards and oregano.
              </p>

              <p className="about-story-txt">
                At Whiskered Grapes Co., we believe that true artistry lies in
                the fusion of unexpected elements, and our winemakers have
                harnessed the power of beards and oregano to craft wines that
                transcend the ordinary. Beards, symbolic of wisdom and
                dedication, embody the patience required in nurturing vines to
                their fullest potential. Our skilled vintners lovingly tend to
                each grapevine, ensuring that every berry flourishes under their
                watchful care, just as they nurture and groom their own beards
                with great attention.
              </p>
            </div>
            <img
              className="about-img"
              src={grapes}
              alt="Grapes being processed"
            />
          </div>

          <div className="about-story-txt" id="about-story-bot">
            <img
              className="about-img"
              src={oregano}
              alt="Grapes being processed"
            />
            <div>
              <p className="about-story-txt">
                But it doesn't end there - oregano, with its aromatic allure and
                robust flavor, plays a captivating role in our winemaking
                process. We've carefully perfected the art of blending this
                cherished herb, enhancing the natural attributes of our grapes.
                The result is a symphony of tastes and aromas that excite the
                senses and leave a lasting impression on your palate.
              </p>

              <p className="about-story-txt">
                Whiskered Grapes Co. stands at the forefront of innovative
                winemaking, creating a sensory adventure that pays homage to
                Massachusetts' rich history and diverse terroir. With each sip,
                you embark on a journey through the soul of this incredible
                region, celebrating the bountiful flavors that nature has
                bestowed upon us.
              </p>

              <p className="about-story-txt">
                Our commitment to quality is unwavering. From the moment the
                first grape is harvested to the final bottling process, our
                artisans meticulously oversee every step. We believe that
                crafting exceptional wines requires a harmonious balance between
                tradition and experimentation - and we've achieved just that
                with our unique use of beards and oregano.
              </p>
            </div>
          </div>
        </div>
      </div>

      <img id="about-bird-img" src={bird} alt="Bird in vineyard" />

      <div id="about-people">
        <h2 className="about-h2">The People</h2>

        <p id="about-people-txt" className="about-story-txt">
          The Pepperoni family, deeply rooted in the heart of Massachusetts, has
          been the driving force behind the renowned Whiskered Grapes Co. since
          its founding in 1933. Their innovative approach to winemaking, which
          incorporates the unexpected elements of beards, oregano, and a touch
          of Massachusetts dirt, has become their signature. This storied
          family's rich history intertwines with the region's lush vineyards,
          where their commitment to crafting exceptional wines, infused with a
          dash of whimsy and innovation, has been unwavering for generations.
          From the rolling vineyards to the bustling cellars of their winery,
          the Pepperoni family's dedication has made Whiskered Grapes Co. a
          beloved name in the world of wine. With each bottle, they share not
          just their passion for winemaking but also their cherished family
          traditions, inviting wine enthusiasts to savor the essence of
          Massachusetts in every sip.
        </p>

        <div id="people-img-div">
          <img
            className="people-img"
            src={beardMan1}
            alt="Young man with a beard"
          />
          <img
            className="people-img-vineyard"
            src={beardManVineyard}
            alt="A bearded man in a vineyard"
          />
          <img
            className="people-img"
            src={beardMan2}
            alt="Older man with a beard"
          />
        </div>
      </div>

      <div id="about-origins">
        <h2 id="origins-h2" className="about-h2">
          Origins
        </h2>

        <p className="about-story-txt">
          The Pepperoni family's origins trace back to the early 20th century
          when they made their way to the picturesque landscapes of
          Massachusetts in 1933. Hailing from a small village in Italy, they
          brought with them a deep-rooted appreciation for the art of
          winemaking, passed down through generations. What makes this family's
          story truly unique is their unwavering love for wine, fueled not just
          by tradition but by a delightful quirkiness. Their fascination with
          wine began in their homeland, where their ancestors crafted wines that
          were often enjoyed in the company of beloved pet hamsters. This
          peculiar yet endearing family tradition transcended generations,
          forging a connection between the Pepperoni family and the world of
          wine that continues to flourish today. With each bottle, they pay
          homage to their Italian heritage, their adventurous journey to
          Massachusetts, and the cherished memory of those hamsters, making
          Whiskered Grapes Co. a truly exceptional winemaking endeavor.
        </p>

        <div></div>
      </div>

      <div id="about-places">
        <h1>The Places</h1>
      </div>
    </section>
  );
}
