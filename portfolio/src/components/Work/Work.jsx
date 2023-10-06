import './Work.css';
import Works from "./Works";
export default function Work() {

    return (
        <section className="work section" id="works">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">Most recent works</span>
            <Works/>
        </section>
    );
}