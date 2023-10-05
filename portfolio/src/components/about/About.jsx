import './About.css';
import AboutImg from "../../assets/about-me.jpeg";
import Info from "./Info";
import CV from "../../assets/StelmaszczykCV.pdf";


export default function About() {

    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My introduction</span>
            <div className="about__container container grid">
                <img src={AboutImg} alt="About image" className="about__img"/>
                <div className="about__data">
                    <Info/>
                    <p className="about__description">
                        Full-stack developer, I create backend with databases and frontend apps. I am always looking for the latest and well works solutions.
                    </p>
                    <a download="" href={CV} className="button button--flex">Download CV</a>
                </div>
            </div>
        </section>
    );
}