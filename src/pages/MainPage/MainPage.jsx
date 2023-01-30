
// import ellipse from '../../images/ellipse.png';
import { HeaderMenuFull } from '../../components/HeaderMenuFull/HeaderMenuFull';
import { MenuHamb } from '../../components/MenuHamb/MenuHamb';
import MediaQuery from 'react-responsive';
import { MainContent } from '../../components/MainContent/MainContent';
import useMediaQuery from 'react-responsive';
import style from './style.module.css';
import { SubmitRequest } from '../SubmitRequest/SubmitRequest';

const Mobile = ({children}) => {
    const isMobile = useMediaQuery({minWidth: 699, maxWidth: 700})
    return isMobile ? children : null
}

export function MainPage () {
    
  
    return <div className={style.corpus}>

        
        <MediaQuery minWidth={700}>
            <HeaderMenuFull />
        </MediaQuery>
        <MediaQuery maxWidth={699}> 
            <MenuHamb/>
        </MediaQuery>

{/*проба - не работает, тут пока просто ни-че-го
        <Mobile>
            <MenuHamb/>
        </Mobile>
*/}

        {/*подключение контента под меню (шапкой) */}
        {/* <MainContent /> */}
        <SubmitRequest></SubmitRequest>
        

    </div>
}