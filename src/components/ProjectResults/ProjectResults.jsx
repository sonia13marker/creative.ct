import style from './style.module.css';
import { OneProjectResult } from '../OneProjectResult/OneProjectResult';

export function ProjectResults ({winner}) {
    return <>
    {
        Object.values(winner).map((win, i)=>{
                console.log(win);
                return (<section key={i} className={style.one_project}>
                    
                    <OneProjectResult {...win} />
                </section>)
        })
    }
    </>
}