import CV from "../../assets/StelmaszczykCV.pdf";
import CVDownloadButton from "../about/CVDownloadButton";

export default function Data() {

    return (
        <div className="home__data">
            <h1 className="home__title">
                Adrian Stelmaszczyk
            </h1>
            <h3 className="home__subtitle">Junior Full Stack Developer</h3>
            <p className="home__description">
                I am a highly motivated Full Stack Developer based in Warsaw, who is passionate and committed to my
                projects.
            </p>
            <div className="home__buttons-section">
                <a href="#contact" className="button button--flex home__button-sayhello">
                    Say Hello!
                    <i className="uil uil-message home__buttons-icon"></i>
                </a>
                <CVDownloadButton CV={CV} iconClassName={"uil uil-file-download home__buttons-icon"}/>
            </div>

        </div>
    );
}