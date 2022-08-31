import React, { useEffect } from "react";
import styles from "./card.module.css";
// import img from "../../images/intocode_3.png";
import { fetchStudents } from "../../features/studentSlice";
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

const Studentspage = ({ item }) => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.student.students);
  const { id } = useParams();

  const filterStudents = students.filter((item) => {
    if(!id) return true;
    return id === item.group
  })

  console.log(students);
    useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  return (
    <div className={styles.cardsBody}>
      <div className={styles.search}>
        <input type="text" />
      </div>
      <div className={styles.maincards}>
        {filterStudents.map((item) => {
          return (
            <div className={styles.onecard}>
              <div className={styles.studentImage}>
                <img alt="#" src={`http://localhost:3000/${item.image}`} />
              </div>
              <span className={styles.studentName}>
                <h2>{item.name}</h2>
                <h2>{item.surname}</h2>
              </span>
              <div className={styles.studentInfo}>
                <h4>{item.group}</h4>
                <h4>{item.email}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Studentspage;
