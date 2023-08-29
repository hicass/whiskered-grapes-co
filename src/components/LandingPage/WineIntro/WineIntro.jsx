import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import earthIcon from '../../../assets/images/LandingPage/wgc-earth-icon.png';
import beardIcon from '../../../assets/images/LandingPage/wgc-beard-icon.png';
import oreganoIcon from '../../../assets/images/LandingPage/wgc-oregano-icon.png';
import fakeIcon from '../../../assets/images/LandingPage/wgc-fake-icon.png';
import './WineIntro.css'

/* FadeInSection credit to https://dev.to/selbekk/how-to-fade-in-content-as-it-scrolls-into-view-10j4 */
function FadeInSection(props) {
    const [visibility, setVisibility] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisibility(entry.isIntersecting));
        });

        const { current } = domRef;
        observer.observe(current);

        return () => observer.unobserve(current);
    }, []);

    return (
        <div 
            className={`fade-in-section ${visibility ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
}

export default function WineIntro() {
    return (
        <FadeInSection>
        <div className='landing-description-section'>
            <h3 id='description-title'>Our Wineeeeeeeee</h3>

            <div id='description-categories'>
                <div className='category'>
                    <h4 id='category-name'>100% FROM EARTH</h4>
                    <img className='description-icon' src={earthIcon} alt='Earth Icon' />
                    <p className='category-description'>Made on the best planet our there baby!</p>
                </div>

                <div className='category'>
                    <h4 id='category-name'>CRAFTED BY BEARDS</h4>
                    <img className='description-icon' src={beardIcon} alt='Beard Icon' />
                    <p className='category-description'>The Whiskered Grapes family is comprised of only people with beards</p>
                </div>

                <div className='category'>
                    <h4 id='category-name'>FLAVORED WITH OREGANO</h4>
                    <img className='description-icon' src={oreganoIcon} alt='Oregano Icon' />
                    <p className='category-description'>Made on the best planet our there baby!</p>
                </div>

                <div className='category'>
                    <h4 id='category-name'>82.7% FAKE</h4>
                    <img className='description-icon' src={fakeIcon} alt='Brain Icon thats crossed out' />
                    <p className='category-description'>None of this is real, and neither are you...</p>
                </div>
            </div>
        </div>
        </FadeInSection>
    )
}