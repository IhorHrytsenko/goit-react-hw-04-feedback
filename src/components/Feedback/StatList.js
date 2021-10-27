      
const StatList = (props) =>  {
        return (
            <ul className="stat__list">
                <li className="stat__item">Хорошо: <span className="stat__number">{props.good}</span></li>
                <li className="stat__item">Нейтрально: <span className="stat__number">{props.neutral}</span></li>
                <li className="stat__item">Плохо: <span className="stat__number"></span>{props.bad}</li>
                <li className="stat__item">Общее количество: <span className="stat__number">{props.total}</span></li>
                <li className="stat__item">Положительные отзывы: <span className="stat__number">{props.goodParcent}</span>%</li>
            </ul>
        )
    }



export default StatList;