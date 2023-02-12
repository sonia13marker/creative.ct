import style from './style.module.css';
import Countdown from 'react-countdown';

/*это общая оболочка таймера будет, 
в зависимости от этапа конкурса он будет отрисовывать
определенные компоненты с разными названиями и датой */

export function Timer (props) {
    const stageCompetition = props.stageCompetition;
    if (stageCompetition === 0) {
        return <WaitingVote />;
      } else 
      if (stageCompetition === 1) {
      return <SubmitRequest />; 
    } else 
    if (stageCompetition === 3) {
        return <Vote />
    } 
}


/*ожидание голосования */
function WaitingVote ({transsmitData, stageCompetition}) {
    return <section className={style.wrapper__timer}>
        <h2 className={style.timer__h2}>До начала голосования</h2>
        <p className={style.timer}>
                {/*год-месяц-день*/}
                <Countdown date="2023-03-15T00:00:00"/>
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
                <Countdown date="2023-03-15T00:00:00"/>
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
function Vote({dates, stageCompetition}) {
    
    return <section className={style.wrapper__timer}>
        <h2 className={style.timer__h2}>До конца этапа голосования</h2>
        <p className={style.timer}>
                {/*год-месяц-день*/}
                <Countdown date="2023-03-15T00:00:00"/>
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


