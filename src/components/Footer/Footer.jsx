import React from "react";
import styles from "./footer.module.css";
import img from "../../images/git.png";
import imga from "../../images/insta.png";
import imag from "../../images/vk.png";

const Footer = () => {
  return (
    <footer className={styles.general}>
      <div className={styles.subGeneral}>
        <div className={styles.block2}>
          <div className={styles.ima}>
            <a href="https://www.instagram.com/intocode_2.jpeg/">
              <img width="30px" src={imga} alt="" />
            </a>
            <a href="https://github.com/intocode">
              <img width="31px" src={img} alt="" />
            </a>
            <a className={styles.i} href="https://vk.com/intocode">
              <img width="30px" src={imag} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.dno}>
        <p>© Intocode 2022</p>
        <p>made by: Suliman, Salambek, Said-Akhmad, Surkho and Ayub</p>
      </div>
    </footer>
  );
};

export default Footer;
