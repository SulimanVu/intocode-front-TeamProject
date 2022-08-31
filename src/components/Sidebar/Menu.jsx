import React from 'react';
import style from './sidebar.module.css'
import { Route, Link } from 'react-router-dom';




const Menu = ({active, setActive}) => {
    return (
        <div className={active ? style.menu_active : style.menu}  onClick={() => setActive(false)}>
            <div className={style.blur}>
                <div className={style.menu_content} onClick={e => e.stopPropagation()}>
                    
                    <h1 className={style.menu_title}>INTOCODE</h1>
                    <ul className={style.menu_list}>
                        <li className={style.menu_item}> <Link to='/students' className={style.menu_link}>Student</Link> </li>
                        <li className={style.menu_item}> <Link to="/groups" className={style.menu_link}>Group</Link> </li>
                        <li className={style.menu_item}> <Link to="/admin" className={style.menu_link}>Admin </Link> </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Menu;