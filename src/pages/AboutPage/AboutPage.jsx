import logo from '../../assets/images/logo.png';
import grapes from '../../assets/images/AboutPage/grapes.jpg';
import oregano from '../../assets/images/AboutPage/oregano.jpg';
import bird from '../../assets/images/AboutPage/bird.jpg';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <section id="about-section">
      <div id="about-top">
        <h1 id="about-h1">Our Story</h1>
      </div>

      <nav id="about-nav">
        <a href="#about-people">The People</a>
        <span>|</span>
        <a href="#about-origins">Origins</a>
        <span>|</span>
        <a href="about-places">The Places</a>
      </nav>

      <div id="about-story">
        <img id="about-story-logo" src={logo} alt="Grapes with a beard" />
        <h2 id="about-h2">Welcome to Whiskered Grapes Co.</h2>

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
        <h1>The People</h1>
      </div>

    </section>
  );
}
