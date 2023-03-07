import style from './style.module.css';
import MediaQuery from 'react-responsive';
import { HeaderMenuFull } from '../../components/HeaderMenuFull/HeaderMenuFull';
import { YearContests } from '../../components/YearContests/YearContests';
import informations from '../../constants/mock.json';
import { FooterSmall } from '../../components/FooterSmall/FooterSmall';
import { Footer } from '../../components/Footer/Footer';
/*тут будет инфа о всех конкурсах (то есть инфа о всех годах)*/

export function ContestPage () {
    return (<div className={style.wr}>

            <HeaderMenuFull />

         {/*тут будет инфа о всех конкурсах*/}
         <div className={style.container}>
            <h2 className={style.container__h2}>Конкурсы</h2>
            <div className={style.prikol}>
            {
            Object.values(informations).map((info ,id)=>{      
                return (Object.values(info).map((inf, di)=>{
                    console.log(inf);
                    
                    return (<YearContests key={di} inf={inf}></YearContests>)
                    
                })
            )})
        }
        </div>
        </div>
        

        <MediaQuery minWidth={576}>
            <Footer/>
        </MediaQuery>
        <MediaQuery maxWidth={575}> 
            <FooterSmall />
        </MediaQuery>

    </div>)
}