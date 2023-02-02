import style from './style.module.css';
import MediaQuery from 'react-responsive';
import { HeaderMenuFull } from '../../components/HeaderMenuFull/HeaderMenuFull';
import { MenuHamb } from '../../components/MenuHamb/MenuHamb';
import { YearContests } from '../../components/YearContests/YearContests';
import informations from '../../constants/mock.json';
import { SubmitRequestPage } from '../SubmitRequestPage/SubmitRequestPage';
import { WaitingVotePage } from '../WaitingVotePage/WaitingVotePage';
import { VotePage } from '../VotePage/VotePage';
import { FooterSmall } from '../../components/FooterSmall/FooterSmall';
import { Footer } from '../../components/Footer/Footer';
/*тут будет инфа о всех конкурсах (то есть инфа о всех годах)*/

export function ContestPage () {
    // var information = [
    //     {
    //         "id": 1,
    //         "year": 2023,
    //         "name": "Django",
    //         "status": "Идет подача заявок",
    //         "date": "01.01.-20.01"
    //     },
    //     {
    //         "id": 2,
    //         "year": 2023,
    //         "name": "Django",
    //         "status": "Ожидание голосования",
    //         "date": "18.01.-31.01"
    //     },
    //     {
    //         "id": 3,
    //         "year": 2023,
    //         "name": "Frontend",
    //         "status": "Голосование",
    //         "date": "01.02.-15.02"
    //     },
    //     {
    //         "id": 4,
    //         "year": 2023,
    //         "name": "Frontend",
    //         "status": "Завершен",
    //         "date": "13.01.-15.01"
    //     }
    // ]
    // { for (var i = 0; i < information.length; i++) {
    //     var obj = information[i];
    //     console.log(`Name: ${obj.name}, ${obj.status}`)
    // }
    
    // } 
    console.log(informations)
    return (<div className={style.wr}>

        <MediaQuery minWidth={700}>
            <HeaderMenuFull />
        </MediaQuery>
        <MediaQuery maxWidth={699}> 
            <MenuHamb/>
        </MediaQuery>

        {/*тут будет инфа о всех конкурсах*/}
        <div className={style.container}>
            <h2 className={style.container__h2}>Конкурсы</h2>
            {
            Object.values(informations).map((info ,id)=>{      
                return Object.values(info).map((inf, di)=>{
                    console.log(inf);
                    return (<YearContests key={di} inf={inf}>
                        <h2>{inf}</h2>
                    </YearContests>)
                    
                })
            })
        }
        </div>
        {/* {informations.map((information, id) => (
                    <section key={id}>
                    <YearContests {...information} />
                    </section>
                 ))} */}

                {/* <SubmitRequestPage></SubmitRequestPage> */}
                {/* <WaitingVotePage></WaitingVotePage> */}
                {/* <VotePage></VotePage> */}
        

        <MediaQuery minWidth={576}>
            <Footer/>
        </MediaQuery>
        <MediaQuery maxWidth={575}> 
            <FooterSmall />
        </MediaQuery>

    </div>)
}