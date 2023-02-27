import style from "./style.module.css";
import { OneYear } from "../OneYear/OneYear";
import { useState } from "react";
import arrow_top from "../../images/arrow__list_top.svg";
import arrow_bottom from "../../images/arrow__list_bottom.svg";

/*тут отображение всех конкурсов за один год */
export function YearContests({ inf }) {
  // let c = Object.keys(inf).sort((a,b) => a.key - b.key)
  // console.log(c)
  console.log(inf)

  const [isActive, setIsActive] = useState(false);
  return (
    <>
      {/*контейнер с годом и стрелкой списка */}
      <section>
        {/* <div className={style.preekol} onClick={() => setIsActive(!isActive)}>

            <div className={style.year__h2}>

                <div className={style.year__block}>

            {
                Object.keys(inf).map((dtf) => {return <div className={style.year__block}>#{dtf}


                <span className={style.year__arrow_top}>
      {isActive ? <img src={arrow_top} alt=""/> : <img src={arrow_bottom}/>}
                 </span> 
                 <div>
                    {Object.values(inf).map((innf, ids) => {
                        
                        return (<OneYear key={ids} {...innf}/>);
                      })}
       
                    </div>
  

                </div>})
            }
 </div>
 </div>
 </div> */}
      </section>

      <section className={style.wrap__section}>
        {/*тут находится сам блок с годом конкурса*/}

        <div className={style.section__block_year}>


          {/*выравнивание всех блоков с годами конкурсов*/}
<div className={style.year_flex}>
            {/*отображение года */}

            {Object.keys(inf).map((dtf) => {
              return <div className={style.one_block} onClick={() => setIsActive(!isActive)}>
                <div className={style.block_wrap}> 
              
              <h2 className={style.year__h2}>#{dtf}</h2>
              
        {/*отображение стрелки*/}

          <span className={style.year__arrow_top}>
              {isActive ? (
                <img src={arrow_top} alt="" />
              ) : (
                <img src={arrow_bottom} />
              )}
            </span>
            </div>

{/*инфа о конкурсах при раскрытии*/}

<OneYear {...inf} />

{/* <div className={style.section__year_inf}>
          {Object.values(inf).map((innf, ids) => {
            return <OneYear key={ids} {...innf} />;
          })}
        </div> */}
              
              </div>;
            })}
            

</div>


        </div>
        
      </section>
    </>
  );
}
