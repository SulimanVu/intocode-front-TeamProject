import React from "react";
import styles from "./about.module.css";

const Aboutpage = () => {
  return (
    <div className={styles.generalAbout}>
      <div className={styles.box1}>
        <h3>График работы:</h3>
        <p>Пока не спишь, ты учишься!</p>
      </div>
      <div className={styles.box2}>
        <h3>Наставник?</h3>
        <p>Гугл и человек, который будет тебе говорить гуглить</p>
      </div>
      <div className={styles.box3}>
        <h3>Стоимость обучения?!</h3>
        <p>Знание бесценно...</p>
      </div>
      <div className={styles.box4}>
        <p>
          "Команда интукод учит и помогает в поиске работы с 2018 года. Наши
          студенты во время учебы сталкиваются с реальными условиями трудового
          процесса программсита и в итоге, когда наступает первый рабочий день,
          студенты чувсвуют себя будто рыба, что плывет по течению." {`© Student`}
        </p>
      </div>
      <div className={styles.map}>
      <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A8136f98a36d94770510de23c5abbac4ca5f0a83d6a0eef85146d98057d9895bd&amp;source=constructor" width="600" height="546" frameborder="0"></iframe>
      </div>
    </div>
  );
};

export default Aboutpage;
