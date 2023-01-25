import style from './style.module.css';
import React, {useState} from "react";
import classnames from "classnames";
import { Menu } from '../Menu/Menu';
import { MainContent } from '../MainContent/MainContent';

export function MenuHamb () {
  const [menuActive, setMenuActive] = useState(false);
    return(<div className={style.layer}>
          <div className={style.wrap}>
    <span className={style.wrap__nav}>
        <span className={style.nav__logo} />
        </span>
    </div>
    
    {/*меню гамбургер */}
      {/* <div className={style.container}>
          <div
              className={
                  classnames({[style.button_menu]: true, [style.button_menu_active]: menuActive})
              }
              onClick={() => setMenuActive(!menuActive)}>
              <span/>
          </div>
          <Menu active={menuActive} setActive={setMenuActive}/>
      </div> */}

 </div> )
 
    
    

}