export default function Skill({name}) {

    return (
        <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
                <h3 className="skills__name">{name}</h3>
            </div>
        </div>
    );
}