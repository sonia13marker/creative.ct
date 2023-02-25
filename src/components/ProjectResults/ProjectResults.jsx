import style from './style.module.css';
import { OneProjectResult } from '../OneProjectResult/OneProjectResult';

export function ProjectResults ({winner}) {
    return <>
    {
        Object.values(winner).map((win, id)=>{
                console.log(win);
                return (
                <section key={id} className={style.one_project}>
                    
                    <OneProjectResult win={win}/>
                </section>)
        })
    }
    </>
}