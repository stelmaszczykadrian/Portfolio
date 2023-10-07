import Skill from "./Skill";
import {backendSkills} from "./Data";
import {groupSize, splitSkillsIntoGroups} from "../../util/util";

export default function Backend() {
    const groupedSkills = splitSkillsIntoGroups(backendSkills, groupSize);
    return (
        <div className="skills__content">
            <h3 className="skills__title">Backend Developer</h3>
            <div className="skills__box">
                {groupedSkills.map((group, groupIndex) => (
                    <div key={groupIndex} className="skills__group">
                        {group.map((skill, index) => (
                            <Skill key={index} name={skill.name} />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
