import style from './style.module.css';
import Countdown from 'react-countdown';

/*это общая оболочка таймера будет, 
в зависимости от этапа конкурса он будет отрисовывать
определенные компоненты с разными названиями и датой */

export function Timer (props) {
    console.log(props)
    const stageCompetition = props.stageCompetition;
    if (stageCompetition === 0) {
        return <WaitingVote time={props.time}/>;
      } else 
      if (stageCompetition === 1) {
      return <SubmitRequest time={props.time}/>; 
    } else 
    if (stageCompetition === 3) {
        return <Vote time={props.time}/>
    } 
}


/*ожидание голосования */
function WaitingVote (props) {
    return <section className={style.wrapper__timer}>
        <h2 className={style.timer__h2}>До начала голосования</h2>
        <p className={style.timer}>
                {/*год-месяц-день*/}
                <Countdown date={props.time}/>
                <span className={style.timer__desc}>дней</span>
                <span className={style.timer__desc}>часов</span>
                <span className={style.timer__desc}>минут</span>
                <span className={style.timer__desc}>секунд</span>
            </p>
            <span className={style.timer__line}>
                <p>Осталось</p>
            </span>
        </section>
  }

/*подача заявок */
function SubmitRequest(props) {
    return <section className={style.wrapper__timer}>
        <h2 className={style.timer__h2}>До конца этапа подачи заявок</h2>
        <p className={style.timer}>
                {/*год-месяц-день*/}
                <Countdown date={props.time}/>
                <span className={style.timer__desc}>дней</span>
                <span className={style.timer__desc}>часов</span>
                <span className={style.timer__desc}>минут</span>
                <span className={style.timer__desc}>секунд</span>
            </p>
            <span className={style.timer__line}>
                <p>Осталось</p>
            </span>
        </section>
  }

/*голосование */
function Vote(props) {
    console.log(props)
    return <section className={style.wrapper__timer}>
        <h2 className={style.timer__h2}>До конца этапа голосования</h2>
        <p className={style.timer}>
                {/*год-месяц-день*/}
                <Countdown date={props.time}/>
                <span className={style.timer__desc}>дней</span>
                <span className={style.timer__desc}>часов</span>
                <span className={style.timer__desc}>минут</span>
                <span className={style.timer__desc}>секунд</span>
            </p>
            <span className={style.timer__line}>
                <p>Осталось</p>
            </span>
        </section>
  }


