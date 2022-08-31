import React from "react";
import styles from "./footer.module.css";
import img from "../../images/git.png";
import imga from "../../images/insta.png";
import imag from "../../images/vk.png";

const Footer = () => {
  return (
    <footer className={styles.general}>
      <div className={styles.subGeneral}>
        <div className={styles.block1}>
          <h3>INTOCODE</h3>
          <p>
            Ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            iure, quibusdam, numquam magnam.
          </p>
        </div>
        <div className={styles.block2}>
          <h3>CONTACTS</h3>
          <div className={styles.ima}>
            <a href="https://github.com/intocode">
              <img width="67px" src={img} alt="" />
            </a>
            <a href="https://www.instagram.com/intocode_2.jpeg/">
              <img width="50px" src={imga} alt="" />
            </a>
            <a className={styles.i} href="https://vk.com/intocode">
              <img width="50px" src={imag} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.dno}>
        
        <p>© Intocode 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
