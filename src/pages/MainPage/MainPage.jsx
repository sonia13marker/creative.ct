
// import ellipse from '../../images/ellipse.png';
import { HeaderMenuFull } from '../../components/HeaderMenuFull/HeaderMenuFull';
import { MenuHamb } from '../../components/MenuHamb/MenuHamb';
import MediaQuery from 'react-responsive';
import { MainContent } from '../../components/MainContent/MainContent';



export function MainPage () {
    return <div>
        <MediaQuery minWidth={700}>
            <HeaderMenuFull />
        </MediaQuery>
        <MediaQuery maxWidth={320}>
            <MenuHamb/>
        </MediaQuery>
        
        {/*подключение контента под меню (шапкой) */}
        <MainContent />

    </div>
}