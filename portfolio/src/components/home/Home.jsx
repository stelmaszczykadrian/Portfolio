import './Home.css';
import PersonalInfo from "./PersonalInfo";
import SocialIcon from "./SocialIcon";
import {data} from "./Data";

export default function Home() {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <div className="home__social">
                        {data.map((item, index) => (
                            <SocialIcon key={index} href={item.href} iconClass={item.iconClass}/>
                        ))}
                    </div>
                    <div className="home__img"/>
                    <PersonalInfo/>
                </div>
            </div>
        </section>
    );
}