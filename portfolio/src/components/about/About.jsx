import './About.css';
import AboutImg from "../../assets/about-me.jpeg";
import CV from "../../assets/cv/StelmaszczykCV.pdf";
import CVDownloadButton from "./CVDownloadButton";
import {aboutSectionDescriptions, infoData, aboutSectionSubtitle, aboutSectionTitle} from "./Data";
import InfoBox from "./InfoBox";

export default function About() {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">
                {aboutSectionTitle}
            </h2>
            <span className="section__subtitle">
                {aboutSectionSubtitle}
            </span>
            <div className="about__container container grid">
                <img src={AboutImg} alt="About image" className="about__img"/>
                <div className="about__data">
                    <div className="about__info grid">
                        {infoData.map((info, index) => (
                            <InfoBox key={index} iconClass={info.iconClass} title={info.title} subtitle={info.subtitle}/>
                        ))}
                    </div>
                    {aboutSectionDescriptions.map((description, index) => (
                        <p key={index} className="about__description">
                            {description}
                        </p>
                    ))}
                    <div className="about__button-download-section">
                        <CVDownloadButton CV={CV} iconClassName={"uil uil-file-download home__buttons-icon"}/>
                    </div>
                </div>
            </div>
        </section>
    );
}