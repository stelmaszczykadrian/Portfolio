export default function HeaderItem({href, iconClass, text}) {

    return (
        <li className="nav__item">
            <a href={href} className="nav__link">
                <i className={iconClass}></i>
                {text}
            </a>
        </li>
    );
}