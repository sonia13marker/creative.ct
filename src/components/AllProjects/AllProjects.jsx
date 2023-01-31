
import style from './style.module.css';
import { OneProject } from '../OneProject/OneProject';


export function AllProjects () {

    let infos = [
        {
            "id": "01",
            "name" : "@prekol_a_ne_name",
            "description" : "Немного информации о проекте: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam nisi, blanditiis sint corrupti nam aliquam quaerat aliquid magnam dolores eos neque vitae.",
            "project_link" : "https://cto-to-tipa-ssilki.net"
        },
        {
            "id" : "02",
            "name" : "@prekoe",
            "description" : "Немного информации о проекте: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam nisi, blanditiis sint corrupti nam aliquam quaerat aliquid magnam dolores eos neque vitae, aliquid magnam dolores eos neque vitae",
            "project_link" : "https://cto-to-silki.net"
        },
        {
           "id" : "03",
            "name" : "@435946jcfoew",
            "description" : "Дом, купить дом, частный дом, 0639468885, продажа домов, дома в области, недорогие дома, проекты домов, купля дома, дом в районе, купить дом в области, дома без посредников, жилой дом, дом в харькове, строительство домов, купить дом в районе, большой Дом, купить дом, частный дом, 0639468885, продажа домов, дома в обла",
            "project_link" : "https://cto-to-silkigeojfod.net"
        },
        // {
        //"id" : "04",
        //     "name" : "@43foew_12",
        //     "description" : "Немного информации о проекте: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam nisi. Немного информации о проекте: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam nisi, blanditiis sint corrupti nam aliquam quaerat aliquid magnam dolores eos neque vitae, aliquid magnam dolores eos neque vitae",
        //     "project_link" : "https://lkigeojfod.net"
        // }
    ]

    return (<div>
        
        <div className={style.container}>
            <div className={style.container__header}>
                <h2 className={style.header__h2}>Голосование</h2>
                {/*тут будет пропс года (?) */}
                <h2 className={style.header__h2}>Django, 2023</h2>
            </div>

                <div>
                    {/*попробовать сделать - если символов больше чем 270, то текст урезать и в конец добавлять "..."*/}
                    <OneProject infos={infos}/>
                </div>

        </div>

    </div>)
}