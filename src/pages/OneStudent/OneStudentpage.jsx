import React, { useEffect, useState } from "react";
import styles from "./onestudent.module.css";
import { motion } from "framer-motion";
import image from "../../images/Suliman.png";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchStudents } from "../../features/studentSlice";
import { fetchNote } from "../../features/noteSlice";

const OneStudentpage = () => {
  const dispatch = useDispatch()
  const {id} = useParams()

  const student = useSelector((state) => state.student.students)

  const filteredStudents = student.filter((i) => {
    if (id === i._id) {
      return true
    }
    return false
  })

  const notes = useSelector((state) => state.note.notes.filter(note => note.student._id === id))


  console.log(notes)


  
  const divVariants = {
    hiden: {
      opacity: 0,
      x: 200,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  useEffect(()=>{
    dispatch(fetchStudents())
    dispatch(fetchNote())
  },[dispatch])

  return (
    filteredStudents.map((item)=>{
      return (
        <section className={styles.main}>
      <div className={styles.text}>
        <motion.h5
          transition={{ duration: 5 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {item.group.nameGroup}
        </motion.h5>
        <motion.h1
          variants={divVariants}
          transition={{ duration: 3 }}
          initial="hiden"
          animate="visible"
        >
          {item.name}
        </motion.h1>
        <motion.h2
          variants={divVariants}
          transition={{ duration: 3 }}
          initial="hiden"
          animate="visible"
        >
          {item.surname}
        </motion.h2>
        <motion.h6
          variants={divVariants}
          transition={{ duration: 3 }}
          initial="hiden"
          animate="visible"
        >
          {item.email}
        </motion.h6>
        <div className={styles.note}>
          {notes.map((item)=>{
            return(
              <motion.div
              transition={{duration: 3}}
              initial={{opacity:0, y:100}}
              animate={{opacity:1, y:0}}
              >{item.notes}
              </motion.div> 
            )
          })}
        </div>
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
      )
    })
    
  );
};

export default OneStudentpage;
