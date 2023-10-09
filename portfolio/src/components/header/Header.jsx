import './Header.css';
import {useState} from "react";
import HeaderItem from "./HeaderItem";
import {headerNavItems} from "./Data";
import logo from '../../assets/logo/StelmaszczykDev-logo.png'
export default function Header() {
    const logoWidth = "205px";
    const logoHeight = "215px";
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="header">
            <nav className="nav container">
                <div className="nav__logo">
                    <img src={logo} width={logoWidth} height={logoHeight} alt="Stelmaszczyk Dev logo"/>
                </div>
                <div className={isMenuOpen ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        {headerNavItems.map((item, index) => (
                            <HeaderItem key={index} href={item.href} iconClass={item.iconClass} text={item.text} />
                        ))}
                    </ul>
                    <i className="uil uil-times nav__close" onClick={() => setIsMenuOpen(!isMenuOpen)}></i>
                </div>
                <div className="nav__toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    );
}