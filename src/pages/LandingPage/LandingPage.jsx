import WineIntro from '../../components/LandingPage/WineIntro/WineIntro';
import NewReleases from '../../components/NewReleases/NewReleases';
import landingImage from '../../assets/images/LandingPage/wgc-landing.jpg';
import ZoomingBackground from '../../components/ZoomingBackground/ZoomingBackground';
import './LandingPage.css';

export default function LandingPage({ wineList }) {
  return (
    <section id="landing-page">
      <div id="landing-top">
        <div id="landing-top-content">
          <h2>- Since 1933 -</h2>
          <h1>Whiskered Grapes Co.</h1>
          <p id="landing-top-p">crafting tradition, embracing innovation</p>
          <ZoomingBackground imageSrc={landingImage} alt={'Two wine bottles'} originHeight={'100vh'} originPosition={'absolute'} />
        </div>

        <div className="scroll-wrapper">
          <div className="scroll-wrapper-inner">
            <div className="scroll-title">Scroll</div>
            <div className="scroll-down"></div>
          </div>
        </div>
      </div>

      <WineIntro />
      <NewReleases wineList={wineList} />
    </section>
  );
}
