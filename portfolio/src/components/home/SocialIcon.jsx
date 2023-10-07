export default function SocialIcon({href, iconClass}) {

    return (
        <a href={href} className="home__social-icon" target="_blank">
            <i className={iconClass}></i>
        </a>
    );
}