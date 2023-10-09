import './Footer.css';
import {FooterLink} from "./FooterLink";
import SocialIcon from "../home/SocialIcon";
import logo from "../../assets/logo/StelmaszczykDev-logo.png";
import {footerLinks, socialIcons} from "./Data";

export default function Footer() {
    const logoWidth = "205px";
    const logoHeight = "215px";
    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__logo-container">
                    <img src={logo} width={logoWidth} height={logoHeight} alt="Stelmaszczyk Dev logo" />
                </div>
                <ul className="footer__list">
                    {footerLinks.map((link, index) => (
                        <FooterLink key={index} href={link.href} text={link.text} />
                    ))}
                </ul>
                <div className="footer__social">
                    {socialIcons.map((icon, index) => (
                        <SocialIcon key={index} href={icon.href} iconClass={icon.iconClass} />
                    ))}
                </div>
            </div>
        </footer>
    );
}