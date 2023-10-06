import {projectsData} from "./Data";
import WorksItem from "./WorksItem";
export default function Works() {

    return (
        <div className="work__container container grid">
            {projectsData.map((item) => {
                return <WorksItem item={item} key={item.id}/>
            })}
        </div>
    );
}