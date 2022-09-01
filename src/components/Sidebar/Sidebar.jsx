import React from 'react';
import style from './sidebar.module.css'
import burger from '../../images/menu.png'
import Menu from './Menu.jsx'
import { useState } from 'react';

const Sidebar = () => {

    const [menuActive, setMenuActive] = useState(false)
  const  handleMenu = () =>{
    setMenuActive(true)
  }
    return (
        <div className={style.burger_btn_container}>
            <div className={style.burger_btn}  onClick={() => handleMenu()}> |||</div>
            
            <Menu  active={menuActive} setActive={setMenuActive} />
        
        </div>
    );
};

export default Sidebar;