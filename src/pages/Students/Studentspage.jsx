import React, { useEffect } from "react";
import styles from "./students.module.css";
import { fetchStudents } from "../../features/studentSlice";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import { fetchGroups } from "../../features/groupSlice";

const Studentspage = () => {
  const dispatch = useDispatch();

  const students = useSelector((state) => state.student.students);
  const allGroups = useSelector((state) => state.group.groups);

  useEffect(() => {
    dispatch(fetchGroups());
    dispatch(fetchStudents());
  }, [dispatch]);

  const { id } = useParams();
  const [search, setSearch] = useState("");

  const hendleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filterStudents = students.filter((item) => {
    if (!id) {
      return true;
    }
    return id === item.group._id;
  });

  const filtered = filterStudents.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className={styles.cardsBody}>
      <div className={styles.mainDrop}>
        <div className={styles.dropMenu}>
          <a href="/" className={styles.dropBtn}>
            Все группы
          </a>
          <div className={styles.dropContent}>
            {allGroups.map((item) => {
              return (
                <Link key={item._id} to={`/students/group/${item._id}`}>
                  {item.nameGroup}
                </Link>
              );
            })}
            <Link to={`/students`}>Все студенты</Link>
          </div>
        </div>
      </div>
      <div className={styles.search}>
        <div className={styles.inputContain}>
          <input
            onChange={hendleSearch}
            type="text"
            id="fname"
            name="fname"
            value={search}
            aria-labelledby={styles.placeholderFName}
          />
          <label className={styles.placeholderText} id="placeholder-fname">
            <div className={styles.text}>Имя студента</div>
          </label>
        </div>
      </div>

      <div className={styles.maincards}>
        {filtered.map((item) => {
          return (
            <div key={item._id} className={styles.onecard}>
              <div className={styles.studentImage}>
                <img
                  alt="#"
                  src={`http://localhost:3000/images/${item.image}`}
                />
              </div>
              <div className={styles.flex}>
                <div className={styles.studentName}>
                  <h2>{item.name}</h2>
                  <h2>{item.surname}</h2>
                </div>
                <div className={styles.studentInfo}>
                  <h2>{item.group.nameGroup}</h2>
                  <h2>{item.email}</h2>
                </div>
              </div>
              <div className={styles.studentpage}>
                <Link to={`/student/${item._id}`}>Подробнее о студенте</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Studentspage;
