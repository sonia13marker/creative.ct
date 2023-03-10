import style from './style.module.css';
import { DetailOneProject } from '../DetailOneProject/DetailOneProject';
import see_arrow from '../../images/see_more_arrow.svg';
import { useEffect, useState } from 'react';
import informations from '../../constants/mock.json';


export function OneProject ({proj}) {

         const [items, setItems] = useState([]);
     const [visible, setVisible] = useState(4);

    useEffect(() => {
        fetch(informations)
        .then( (res) => res.json())
        .then((data) => setItems(data));
    }, []);

const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
}
console.log(proj)
    return (<div className={style.wrapper}>
                <div className={style.grid}>
                {Object.values(proj).slice(0, visible).map((pro, id) => (
                    <section key={id}  className={style.grid__project}>
                    <DetailOneProject {...pro} />
                    
                    </section>
                 ))}
               
                </div>
                <button className={style.btn__wrappper} onClick={showMoreItems}>
        <div className={style.btn__text}>Смотреть еще <img src={see_arrow} alt=""/></div>
    </button>

    </div>)
}