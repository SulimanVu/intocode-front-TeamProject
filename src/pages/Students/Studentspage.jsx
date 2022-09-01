import React, { useEffect } from "react";
import styles from "./card.module.css";
// import img from "../../images/intocode_3.png";
import { fetchStudents } from "../../features/studentSlice";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";

const Studentspage = ({ item }) => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.student.students);
  //const groups = useSelector((state) => state.group.groups)
  const { id } = useParams();
  const [search, setSearch] = useState("");

  const hendleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filterStudents = students.filter((item) => {
    if (!id) {
      return true;
    }
    return id === item.group;
  });
  console.log(filterStudents);

  const filtered = filterStudents.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  console.log(filtered);
  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  return (
    <div className={styles.cardsBody}>
        <div className={styles.dropMenu}>
            <label for="touch"><span className={styles.groupsBtn}>Все группы</span></label>
            <input type="checkbox" className={styles.touch}/>
            <ul className={styles.menuLists}>
                <li className={styles.menuItems}>Группа 1</li>
                <li className={styles.menuItems}>Группа 1</li>
                <li className={styles.menuItems}>Группа 1</li>
            </ul>
        </div>
      <div className={styles.search}>
        <div className={styles.inputContain}>
          <input
            onChange={hendleSearch}
            type="text"
            id="fname"
            name="fname"
            autocomplete="off"
            value={search}
            aria-labelledby={styles.placeholderFName}
          />
          <label
            className={styles.placeholderText}
            for="fname"
            id="placeholder-fname"
          >
            <div className={styles.text}>Имя студента</div>
          </label>
        </div>
      </div>
      <div className={styles.maincards}>
        {filtered.map((item) => {
          return (
            <div className={styles.onecard}>
              <div className={styles.studentImage}>
                <img alt="#" src={`http://localhost:3000/${item.image}`} />
              </div>
              <div className={styles.flex}>
                <div className={styles.studentName}>
                  <h2>{item.name}</h2>
                  <h2>{item.surname}</h2>
                </div>
                <div className={styles.studentInfo}>
                  <h4>{item.group}</h4>
                  <h4>{item.email}</h4>
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
