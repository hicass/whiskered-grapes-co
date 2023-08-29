import beardIcon from '../../assets/images/LandingPage/wgc-beard-icon.png'
import './Footer.css'


export default function Footer() {
    return (
        <section id='footer'>
            <div id='footer-top'>
                <div id='footer-top-l'>
                    <img id='footer-icon' src={beardIcon} alt='beard' />
                    <div>
                        <span>Whiskered</span><br />
                        <span>Grapes</span><br />
                        <span>Co.</span><br />
                    </div>
                </div>
                <div>
                    <p>
                        <span>Disclaimer:</span> Please be advised that <span>Whiskered Grapes Co.</span> 
                        is completely fake and was created for personal development purposes by Cass Walters
                    </p>
                </div>
            </div>

            <div id='footer-bottom'>
                <div>
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                    <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
                <span>2023 Whiskered Grapes Co.</span>
            </div>
        </section>
    )
}