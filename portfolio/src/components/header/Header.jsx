import './Header.css';
import {useState} from "react";
import HeaderItem from "./HeaderItem";
import { navigationItems} from "./Data";
import logo from '../../assets/logo/StelmaszczykDev-logo.png'
export default function Header() {
    const logoWidth = "205px";
    const logoHeight = "215px";
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeNav, setActiveNav] = useState("#home")

    window.addEventListener('scroll', function () {
        const header = document.querySelector('.header');
        if (this.scrollY >= 80) header.classList.add('scroll-header');
        else header.classList.remove('scroll-header')

    })
    return (
        <header className="header">
            <nav className="nav container">
                <div className="nav__logo">
                    <img src={logo} width={logoWidth} height={logoHeight} alt="Stelmaszczyk Dev logo"/>
                </div>
                <div className={isMenuOpen ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        {navigationItems.map((item, index) => (
                            <HeaderItem
                                key={index}
                                href={item.href}
                                text={item.text}
                                iconClass={item.iconClass}
                                active={activeNav === item.href}
                                setActiveNav={setActiveNav}
                            />
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