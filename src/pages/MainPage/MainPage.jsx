
// import ellipse from '../../images/ellipse.png';
import { HeaderMenuFull } from '../../components/HeaderMenuFull/HeaderMenuFull';
import { MainContent } from '../../components/MainContent/MainContent';
import style from './style.module.css';


const Mobile = () => {

}

export function MainPage () {
    
  
    return <div className={style.corpus}>

            <HeaderMenuFull />

        {/*подключение контента под меню (шапкой) */}
        <MainContent />
        

    </div>
}