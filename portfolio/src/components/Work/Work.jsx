import './Work.css';
import {projectsData, workSectionSubtitle, workSectionTitle} from "./Data";
import WorksItem from "./WorksItem";
export default function Work() {
    return (
        <section className="work section" id="works">
            <h2 className="section__title">
                {workSectionTitle}
            </h2>
            <span className="section__subtitle">
                {workSectionSubtitle}
            </span>
            <div className="work__container container grid">
                {projectsData.map((item) => {
                    return <WorksItem item={item} key={item.id}/>
                })}
            </div>
        </section>
    );
}