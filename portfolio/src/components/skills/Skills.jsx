import './Skills.css';
import {
    backendSkills,
    backendTitle,
    frontendSkills,
    frontendTitle,
    skillsSectionSubtitle,
    skillsSectionTitle
} from "./Data";
import SkillsSection from "./SkillsSection";

export default function Skills() {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">
                {skillsSectionTitle}
            </h2>
            <span className="section__subtitle">
                {skillsSectionSubtitle}
            </span>
            <div className="skills__container container grid">
                <SkillsSection skillList={frontendSkills} sectionTitle={frontendTitle}/>
                <SkillsSection skillList={backendSkills} sectionTitle={backendTitle}/>
            </div>
        </section>
    );
}