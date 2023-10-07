export const groupSize = 4;

export const splitSkillsIntoGroups = (skills, groupSize) => {
    const groups = [];
    for (let i = 0; i < skills.length; i += groupSize) {
        groups.push(skills.slice(i, i + groupSize));
    }
    return groups;
};