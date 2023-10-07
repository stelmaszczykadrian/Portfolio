import './Home.css';
import Data from "./Data";
import SocialIcon from "./SocialIcon";

export default function Home() {

    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <div className="home__social">
                        <SocialIcon href={"https://linkedin.com/in/stelmaszczykadrian"} iconClass={"bx bxl-linkedin"}/>
                        <SocialIcon href={"https://github.com/stelmaszczykadrian"} iconClass={"bx bxl-github"}/>
                        <SocialIcon href="mailto:stelmaszczykadrian@gmail.com" iconClass="uil uil-envelope"/>
                    </div>
                    <div className="home__img"/>
                    <Data/>
                </div>
            </div>
        </section>
    );
}