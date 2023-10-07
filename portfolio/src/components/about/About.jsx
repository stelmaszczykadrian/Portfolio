import './About.css';
import AboutImg from "../../assets/about-me.jpeg";
import Info from "./Info";
import CV from "../../assets/StelmaszczykCV.pdf";
import CVDownloadButton from "./CVDownloadButton";

export default function About() {
   const aboutDescription = 'I\'m Adrian, a junior developer with a passion for programming and see it as a realm of unlimited creativity and innovation. I am currently looking for a job that will give me the opportunity to grow and learn new skills. I am highly motivated and ready for new challenges. In my free time I practice bodybuilding, mixed martial arts and travel the world. These interests have taught me discipline, perseverance and overcoming obstacles. If you are looking for an ambitious junior developer who is eager to learn from experienced professionals, I invite you to check out my LinkedIn for more information about my experience and skills.'
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My introduction</span>
            <div className="about__container container grid">
                <img src={AboutImg} alt="About image" className="about__img"/>
                <div className="about__data">
                    <Info/>
                    <p className="about__description">
                        {aboutDescription}
                    </p>
                    <div className="about__button-download-section">
                        <CVDownloadButton CV={CV} iconClassName={"uil uil-file-download home__buttons-icon"}/>
                    </div>
                </div>
            </div>
        </section>
    );
}