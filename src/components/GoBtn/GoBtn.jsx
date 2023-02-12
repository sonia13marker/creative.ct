import style from './style.module.css';
import { Link } from 'react-router-dom';


export function GoBtn (props) {
  const statusInNumber = props.statusInNumber;

  if (statusInNumber === 0) {
    return <ToWaitingVoteBtn />;
  } else 
  if (statusInNumber === 1) {
    return <ToSubmitBtn />;
  } else 
  if (statusInNumber === 3) {
    return <ToVoteBtn />;
  } else 
  if (statusInNumber === 5) {
    return <ToResultsBtn />;
  }

}

// function renderLinks(status) {
//     if (status === 0) {
//       return <Link to="/waiting-vote"></Link>;
//     } else 
//     if (status === 1) {
//       return <Link to="/submit"></Link>;
//     } else 
//     if (status === 3) {
//       return <Link to="/vote"></Link>;
//     } else 
//     if (status === 5) {
//       return <Link to="/results"></Link>;
//     }
//   }

// export function GoBtn (props) {
//   const status = props.status;
//     return <span>
//         <Link to={renderLinks()} className={style.date__btn}>Перейти</Link>
//     </span>
// }

/*переход на страницу с ожиданием голосования*/
function ToWaitingVoteBtn () {
  return <span>
    <Link to="/waiting-vote" className={style.date__btn}>Перейти</Link>
    </span>
}

/*переход на страницу с подачей заявок*/
function ToSubmitBtn () {
  return <span>
    <Link to="/submit" className={style.date__btn}>Перейти</Link>
    </span>
}

/*переход на страницу голосования*/
function ToVoteBtn () {
  return <span>
    <Link to="/vote" className={style.date__btn}>Перейти</Link>
    </span>
}

/*переход на страницу с результатами*/
function ToResultsBtn () {
  return <span>
    <Link to="/results" className={style.date__btn}>Перейти</Link>
    </span>
}