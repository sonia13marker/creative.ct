import style from './style.module.css';

export function ProjectVoteButton () {
    return (<>
        <button name="vote" id="project__vote_btn" className={style.project__btn}>Голосовать</button>
    </>)
}