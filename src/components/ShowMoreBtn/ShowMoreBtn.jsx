import style from './style.module.css';
import see_arrow from '../../images/see_more_arrow.svg';

export function ShowMoreBtn () {
    return <div className={style.btn__wrappper}>
        <span className={style.btn__text}>Смотреть еще <img src={see_arrow} alt=""/></span>
    </div>
}