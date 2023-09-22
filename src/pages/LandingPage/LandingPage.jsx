import WineIntro from '../../components/LandingPage/WineIntro/WineIntro';
import NewReleases from '../../components/LandingPage/NewReleases/NewReleases';
import './LandingPage.css';

export default function LandingPage() {
  return (
    <>
      <div id="landing-top">
        <div id="landing-top-txt">
          <h2>- Since 1933 -</h2>
          <h1>Whiskered Grapes Co.</h1>
          <p id="landing-top-p">crafting tradition, embracing innovation</p>
        </div>

        <div id="scroll-wrapper">
          <div id="scroll-wrapper-inner">
            <div id="scroll-title">Scroll</div>
            <div id="scroll-down"></div>
          </div>
        </div>
      </div>

      <WineIntro />
      <NewReleases />
    </>
  );
}
