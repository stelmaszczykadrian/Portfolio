import './Footer.css';
import {FooterLink} from "./FooterLink";
import SocialIcon from "../home/SocialIcon";

export default function Footer() {

    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Stelmaszczyk</h1>
                <ul className="footer__list">
                    <FooterLink href="#about" text="About"/>
                    <FooterLink href="#skills" text="Skills"/>
                    <FooterLink href="#works" text="Projects"/>
                    <FooterLink href="#contact" text="Contact"/>
                </ul>
                <div className="footer__social">
                    <SocialIcon href={"https://linkedin.com/in/stelmaszczykadrian"} iconClass={"bx bxl-linkedin"}/>
                    <SocialIcon href={"https://github.com/stelmaszczykadrian"} iconClass={"bx bxl-github"}/>
                    <SocialIcon href="mailto:stelmaszczykadrian@gmail.com" iconClass="uil uil-envelope"/>
                </div>
            </div>
        </footer>
    );
}