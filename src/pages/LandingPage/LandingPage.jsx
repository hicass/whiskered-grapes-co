import WineIntro from '../../components/LandingPage/WineIntro/WineIntro';
import './LandingPage.css';

export default function LandingPage() {
    return (
        <>
        <div id='landing-top'>
            <h2>- Since 1933 -</h2>
            <h1>Whiskered Grapes Co.</h1>
            <h3>crafting tradition, embracing innovation</h3>

            <div id="scroll-wrapper">
                <div id="scroll-wrapper-inner">
                    <div id="scroll-title">
                        Scroll
                    </div>
                    <div id="scroll-down">
                    </div>
                </div>
            </div>
        </div>

        <WineIntro />
        </>
    )
}