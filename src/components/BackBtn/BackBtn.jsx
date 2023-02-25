import style from './style.module.css';
import see_arrow from '../../images/see_more_arrow.svg';
import { Link } from 'react-router-dom';

export function BackBtn () {
    return(
    <>
        <Link to="/contests">
            <button className={style.btn__wrappper} >
                <div className={style.btn__text}><img src={see_arrow} alt=""/> Назад</div>
            </button>
        </Link>
    

    </>

    )
}