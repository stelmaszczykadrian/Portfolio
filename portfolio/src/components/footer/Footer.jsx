import './Footer.css';
export default function Footer() {

    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Stelmaszczyk</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>
                    <li>
                        <a href="#works" className="footer__link">Projects</a>
                    </li>
                    <li>
                        <a href="#contact" className="footer__link">Contact</a>
                    </li>
                </ul>
                <div className="footer__social">
                    <a href="https://linkedin.com/in/stelmaszczykadrian" className="footer__social-link" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                    </a>
                    <a href="https://github.com/stelmaszczykadrian" className="footer__social-link" target="_blank">
                        <i className="bx bxl-github"></i>
                    </a>
                    <a href="mailto:stelmaszczykadrian@gmail.com" className="footer__social-link" target="_blank">
                        <i className="bx bx-mail-send"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}