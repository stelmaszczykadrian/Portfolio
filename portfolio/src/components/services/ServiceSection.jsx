import ServiceItem from "./ServiceItem";

export default function ServiceSection({ title, services }){
    return(
        <article className="service">
            <div className="service__head">
                <h3>{title}</h3>
            </div>
            <ul className="service__list">
                {services.map((item, index) => (
                    <ServiceItem
                        key={index}
                        iconClass={item.iconClass}
                        description={item.description}
                    />
                ))}
            </ul>
        </article>
    );
}
