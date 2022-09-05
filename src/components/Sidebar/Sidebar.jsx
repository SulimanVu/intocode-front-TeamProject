import React from "react";
import style from "./sidebar.module.css";
import Menu from "./Menu.jsx";
import { useState } from "react";
import logo from "../../images/intocode_3.png";

const Sidebar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const handleMenu = () => {
    setMenuActive(true);
  };
  return (
    <div className={style.burger_btn_container}>
      <section>
        <img src={logo} className={style.logo} alt="123" />
      </section>
      <div className={style.burger_btn} onClick={() => handleMenu()}>
        {" "}
        ☰
      </div>
      <Menu active={menuActive} setActive={setMenuActive} />
    </div>
  );
};

export default Sidebar;
