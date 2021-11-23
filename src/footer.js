import img_github from './images/social/github.png'
import img_linkedin from './images/social/linkedin.png'
import img_twitter from './images/social/twitter.png'
import img_discord from './images/social/discord.png'


function Footer() {

    return (

        <footer class="d-flex flex-wrap justify-content-evenly align-items-center py-3 my-4 border-top">

            <div class=" d-flex align-items-center">
                <span class="text-muted">© 2021 m.fuad yerdelen</span>
            </div>

            <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">

                <li class="ms-3"><a class="text-muted" href="https://github.com/fuadyerdelen">
                    <img className="social-image" src={img_github} alt="githum img" />
                </a></li>
                <li class="ms-3"><a class="text-muted" href="https://github.com/fuadyerdelen">
                    <img className="social-image" src={img_linkedin} alt="githum img" />
                </a></li>
                <li class="ms-3"><a class="text-muted" href="https://github.com/fuadyerdelen">
                    <img className="social-image" src={img_discord} alt="githum img" />
                </a></li>
                <li class="ms-3"><a class="text-muted" href="https://github.com/fuadyerdelen">
                    <img className="social-image" src={img_twitter} alt="githum img" />
                </a></li>
            </ul>
        </footer>

    )
}

export default Footer;