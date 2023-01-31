import style from './style.module.css';
import { DetailOneProject } from '../DetailOneProject/DetailOneProject';

export function OneProject ({infos}) {
    return (<div className={style.wrapper}>
                <div className={style.grid}>
                {infos.map((info, id) => (
                    <section key={id}  className={style.grid__project}>
                    <DetailOneProject {...info} />
                    </section>
                 ))}

                </div>

    </div>)
}