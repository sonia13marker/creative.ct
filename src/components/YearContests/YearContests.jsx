import style from './style.module.css';
import { OneYear } from '../OneYear/OneYear';

/*тут отображение всех конкурсов за один год */
export function YearContests ({inf}) {
    
    let c = Object.keys(inf).sort((a,b) => a.key - b.key)
    console.log(c)
        // Object.keys(inf).map((dtf) => {
        // dtf.sort((a,b) => a.price - b.price))
        // console.log(dtf)
        // }
        

        // Object.keys(inf)
        // .map((dtf) => {return <span>{dtf}</span>})
        

    return (<>
    {/* <li>{c}</li> */}
    <div className={style.years}>
{




    
    //  const recentprods = products
    //  .sort((a,b) => a.price - b.price)
    //      // if you want to change the sorting direction: b.price - a.price
    //  .map(prod => {
    //     return <TableRow name={prod.name} price={prod.price} />
    //  });

}
</div>

{/* </div>    */}


            {/*контейнер с годом и стрелкой списка */}
            <section>
                <span>
                <div >
                    {
                Object.keys(inf).map((dtf) => {return <h2 className={style.year__h2}>{dtf}</h2>})
                    }
                    </div>
                    <div>
                    {Object.values(inf).map((innf, ids) => {
                        
          return (<OneYear key={ids} {...innf}/>);
        })}
       
                    </div>
                    
                </span>
                
            </section>
    </>)
}