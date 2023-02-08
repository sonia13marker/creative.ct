import style from './style.module.css';
import React, {useState} from "react";
import classnames from "classnames";
import { Menu } from '../Menu/Menu';
import { MainContent } from '../MainContent/MainContent';

export function MenuHamb () {
  const [menuActive, setMenuActive] = useState(false);
    return(<div >

    {/*меню гамбургер */}
      <div className={style.container}>
            <span></span>
            <div className={style.burger_btn} onClick={() => setMenuActive(!menuActive)}>
                <span/>
            </div>
      </div>
      <Menu active={menuActive} setActive={setMenuActive}></Menu>

 </div> )
 
    
    

}