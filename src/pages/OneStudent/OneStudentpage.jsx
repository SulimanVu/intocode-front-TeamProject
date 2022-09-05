import React, { useEffect } from "react";
import styles from "./onestudent.module.css";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchStudents } from "../../features/studentSlice";
import { fetchNote, addNote, removeNote } from "../../features/noteSlice";
import { removeStudent } from "../../features/studentSlice";
import { useState } from "react";

const OneStudentpage = () => {
  const [text, setText] = useState('');
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector((state) => state.application.token)

  const student = useSelector((state) => state.student.students);
  const filteredStudents = student.filter((i) => {
    if (id === i._id) {
      return true;
    }
    return false;
  });

  const notes = useSelector((state) =>
  state.note.notes.filter((item) => item.student._id === id)
);

  const handleChange = (e) => {
    setText(e.target.value)
  }
  const handleAddNote = (student, notes) => {
    setText('')
    dispatch(addNote({student, notes}))
  }
  const handleDeleteNote = ( notes) => {
    console.log(student);
    dispatch(removeNote( notes))
  }
  const handleDeleteStudent = () => {
    dispatch(removeStudent(id))
    navigate("/students")
  }
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

  useEffect(() => {
    dispatch(fetchStudents());
    dispatch(fetchNote());
  }, [dispatch]);

  return (
    <div className={styles.main_block}>
      {filteredStudents.map((item, index) => {
        return (
          <section
           key={index}
           className={styles.main}>
            <div className={styles.text}>
              <motion.div
              className={styles.h5}
                transition={{ duration: 3 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
              >
              <span>{item.group.nameGroup}</span>
              {token ? <span onClick={() => handleDeleteStudent()}>Удалить студента</span> : null}
              </motion.div>
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
                <motion.p
                  transition={{ duration: 2 }}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  Заметки:
                </motion.p>
                <div className={styles.comments_block}>
                {notes ? (
                  notes.map((item, index) => {
                    return (
                      <motion.div
                      key={index}
                      className={styles.notes_text}
                        transition={{ duration: 1 }}
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <span>{item.notes}</span>
                        {token ? <button onClick={()=> handleDeleteNote(item._id)}
                        className={styles.deleteNote}>Удалить</button>: null}
                      </motion.div>
                    );
                  })
                ) : (
                  <motion.p
                    className={styles.not_note}
                    transition={{ duration: 3 }}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Нет заметок
                  </motion.p>
                )}
                </div>
                {token ? <div className={styles.notes}>
                  <input type='text' value={text} onChange={(e) => handleChange(e)} />
                  <button onClick={()=>handleAddNote(item._id, text)}>Добавить</button>
                </div> : null}
              </div>
            </div>
            <div className={styles.image}>
              <div className={styles.circle}>
                <div className={styles.circle2}></div>
                <img
                  src={`http://localhost:3000/images/${item.image}`}
                  alt="../../images/Suliman.png"
                />
              </div>
              <motion.div
                className={`${styles.circle_info} ${styles.circle_info1}`}
                transition={{ duration: 1.5 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                TS
              </motion.div>
              <motion.div
                className={`${styles.circle_info} ${styles.circle_info2}`}
                transition={{ duration: 1.5 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                HTML
              </motion.div>
              <motion.div
                className={`${styles.circle_info} ${styles.circle_info3}`}
                transition={{ duration: 1.5 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                CSS
              </motion.div>
              <motion.div
                className={`${styles.circle_info} ${styles.circle_info4}`}
                transition={{ duration: 1.5 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                JS
              </motion.div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default OneStudentpage;
