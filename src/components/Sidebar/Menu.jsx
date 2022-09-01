import React from 'react';
import style from './sidebar.module.css'
import { Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import intocode from "../../images/intocode_1.png"



const Menu = ({active, setActive}) => {

    const token = useSelector(state => state.application.token)
    const handleLogOut = () => {
        localStorage.clear();
        window.location.reload();
      }
      

    return (
        <div className={active ? style.menu_active : style.menu}  onClick={() => setActive(false)}>
            <div className={style.blur}>
                <div className={style.menu_content} onClick={e => e.stopPropagation()}>
                   
                    <Link to='/' className={style.menu_title}> INTOCODE</Link>
                    <ul className={style.menu_list}>
                        <li className={style.menu_item}> <Link to='/students' className={style.menu_link}>Students</Link> </li>
                        <li className={style.menu_item}> <Link to="/about" className={style.menu_link}>About Us</Link> </li>
                       {token ? <li className={style.menu_item}> <Link to="/admin" className={style.menu_link}>Admin</Link> </li> : null} 
                       {token ? <li className={style.menu_item}> <Link to="/" onClick={handleLogOut} className={style.menu_link}>Log Out</Link> </li> : null}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Menu;