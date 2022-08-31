import React, { useState } from "react";
import styles from "./onestudent.module.css";
import { motion } from "framer-motion";
import image from "../../images/Suliman.png"

const OneStudentpage = () => {
  const divVariants = {
    hiden: {
      opacity: 0,
      x: 200
    },
    visible: {
      opacity: 1,
      x:0
    },
  };

  return (
    <section className={styles.main}>
      <div className={styles.text}>
        <motion.h5
        transition={{duration:5}}
        initial={{opacity:0, y:30}}
        animate={{opacity:1, y:0}}>Bootcamp 11</motion.h5>
        <motion.h1 variants={divVariants}
        transition={{duration:3}}
        initial='hiden'
        animate='visible'
        >Tsutsaev</motion.h1>
        <motion.h2 variants={divVariants}
        transition={{duration:3}}
        initial='hiden'
        animate='visible'
        >Djamalayl</motion.h2>
        <motion.h6 variants={divVariants}
        transition={{duration:3}}
        initial='hiden'
        animate='visible'
        >tsutsaev@gmail.com</motion.h6>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est vero
          illo cupiditate corrupti distinctio tempore minima beatae sint
          perferendis in? Voluptatibus quia consequatur hic quaerat porro illum
          rerum, harum dignissimos.
        </p>
      </div>
      <div className={styles.image}>
        <div className={styles.circle}>
        <div className={styles.circle2}></div>
          <img src={image} />
        </div>
          <motion.div
            className={`${styles.circle_info} ${styles.circle_info1}`}
            transition={{ duration: 1.5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            UI
          </motion.div>
          <motion.div
            className={`${styles.circle_info} ${styles.circle_info2}`}
            transition={{ duration: 1.5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            C#
          </motion.div>
          <motion.div
            className={`${styles.circle_info} ${styles.circle_info3}`}
            transition={{ duration: 1.5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            LI
          </motion.div>
          <motion.div
            className={`${styles.circle_info} ${styles.circle_info4}`}
            transition={{ duration: 1.5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            SU
          </motion.div>
      </div>
    </section>
  );
};

export default OneStudentpage;
