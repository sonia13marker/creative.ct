import style from './style.module.css';
import MediaQuery from 'react-responsive';
import { HeaderMenuFull } from '../../components/HeaderMenuFull/HeaderMenuFull';
import { MenuHamb } from '../../components/MenuHamb/MenuHamb';
import { YearContests } from '../../components/YearContests/YearContests';
import infos from '../../constants/mock.json';
/*тут будет инфа о всех конкурсах (то есть инфа о всех годах)*/

export function ContestPage (props) {
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
    return (<div className={style.wr}>

        <MediaQuery minWidth={700}>
            <HeaderMenuFull />
        </MediaQuery>
        <MediaQuery maxWidth={699}> 
            <MenuHamb/>
        </MediaQuery>

        {/*тут будет инфа о всех конкурсах*/}
        {/* {
infos.map((info, i) => {
                <YearContests key={i}
                year={info.year}
                ></YearContests>
            })
        } */}
        <YearContests infos={infos.year}></YearContests>

    </div>)
}