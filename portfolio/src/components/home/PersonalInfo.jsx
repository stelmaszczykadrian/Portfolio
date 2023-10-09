import CV from "../../assets/cv/StelmaszczykCV.pdf";
import CVDownloadButton from "../about/CVDownloadButton";
import {buttonText, homeSectionDescription, homeSectionSubtitle, homeSectionTitle} from "./Data";

export default function PersonalInfo() {
    return (
        <div className="home__data">
            <h1 className="home__title">
                {homeSectionTitle}
            </h1>
            <h3 className="home__subtitle">
                {homeSectionSubtitle}
            </h3>
            <p className="home__description">
                {homeSectionDescription}
            </p>
            <div className="home__buttons-section">
                <a href="#contact" className="button button--flex home__button-sayhello">
                    {buttonText}
                    <i className="uil uil-message home__buttons-icon"></i>
                </a>
                <CVDownloadButton CV={CV} iconClassName={"uil uil-file-download home__buttons-icon"}/>
            </div>

        </div>
    );
}