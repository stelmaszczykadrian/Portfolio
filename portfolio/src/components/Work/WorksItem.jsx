export default function WorksItem({item}) {
    return (
        <div className="work__card" key={item.id}>
            <a href={item.repository}>
                <img src={item.image} alt="" className="work__img"/>
            </a>
            <h3 className="work__title">{item.title}</h3>
            <a href={item.repository} className="work__button">
                Demo
                <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </a>
        </div>
    );
}