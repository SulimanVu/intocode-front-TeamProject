import React, { useState } from "react";
import styles from "./mainpage.module.css";
import { motion } from "framer-motion";
import logo from "../../images/intocode_3.png";
import { useDispatch, useSelector } from "react-redux";
import { SignIn } from "../../features/applicationSlice";
import { Link, Navigate } from "react-router-dom";

const Mainpage = () => {
  
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [form, setForm] = useState(false)
  const token = useSelector(state => state.application.token);

  const dispatch = useDispatch()

  const handleLoginChange = (e) =>{
    setLogin(e.target.value)
  }
  const handlePasswordChange = (e) =>{
    setPassword(e.target.value)
  }
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(SignIn({login, password}), [dispatch])
    setLogin("");
    setPassword("");
  }
  const handleForm = () =>{
    setForm(!form)
  }
  return (
    <>
      <section className={styles.first_section}>
        <motion.img
          width="60px"
          src={logo}
          className={styles.logo}
          transition={{ duration: 3 }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
        />

        <motion.p
          className={styles.into_text}
          transition={{ duration: 3 }}
          initial={{ opacity: 0, y: 100, fontSize: "20px" }}
          animate={{
            opacity: [0, 0.4, 0.8, 1],
            y: 0,
            scale: [1, 1.5, 1],
            fontSize: "100px",
            textShadow: "0 0 25px rgb(26, 26, 216)",
          }}
        >
          INTOCODE
        </motion.p>
      </section>

      <section className={styles.second_section}>
        <motion.div
          transition={{ duration: 3 }}
          initial={{ borderBottom: "none" }}
          animate={{
            borderBottom: "3px solid #fff",
          }}
        >
          Почуму стоит выбирать именно нас? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Cupiditate dolore rem porro eum? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Iusto placeat
          voluptates repellendus blanditiis error rem ab? Voluptatibus sed quod
          odio iste molestiae ex eum autem ratione, similique ducimus qui
          debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Officia velit sunt assumenda ut ipsa, quae nisi ducimus est
          voluptatibus hic, quisquam vitae, minima aperiam natus. Doloribus odio
          temporibus aut labore!
          <br />
          <div>Подробнее</div>
        </motion.div>
        <motion.div
          transition={{ duration: 3 }}
          initial={{ borderBottom: "none" }}
          animate={{
            borderBottom: "3px solid #fff",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          dolore rem porro eum?Iuto ipsum dolor sit amet consectetur adipisicing
          elit. Cupiditate dolore rem porro eum? Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Numquam, quaerat optio? Suscipit amet
          cumque impedit. Dolorem adipisci, expedita sed molestias laborum
          repellat non architecto deserunt, minus explicabo sequi facilis ipsam?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ad
          voluptatibus eveniet omnis nisi, quae iste at iusto ab nesciunt illo
          inventore veniam porro voluptates laborum velit explicabo fuga. Quis.
          <br />
          <div>Подробнее</div>
        </motion.div>
      </section>
      <motion.section
        className={styles.section_about}
        transition={{ duration: 2 }}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
        repellat reiciendis. Saepe ea quae expedita voluptatem, doloremque eos
        rem, perspiciatis, autem dolor veritatis nam hic dicta consectetur
        dolorem mollitia molestiae! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Exercitationem quo quas fugit nostrum, explicabo
        magnam quibusdam ullam, enim iure ut illo voluptatem provident nesciunt!
        Sunt repellat reprehenderit delectus eaque in! Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Eveniet sed harum optio impedit
        ducimus illum architecto, doloremque aliquam sequi! Inventore assumenda
        harum deleniti debitis dicta enim modi exercitationem necessitatibus
        nemo. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Veritatis quis magni autem, iusto, alias libero ipsam labore eius ea
        assumenda iure, neque eaque ut vitae voluptates? Atque labore sunt
        dolore! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
        quam, cum repellendus quia laboriosam expedita voluptas qui nesciunt
        dolore libero aliquid labore quaerat totam necessitatibus doloremque
        tempore cupiditate amet recusandae! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Cumque soluta, dolorum voluptates,
        perferendis sit quo aspernatur reprehenderit totam, voluptas aperiam
        dicta iste dolor. Ea nobis ex nostrum distinctio ab ipsa.
      </motion.section>
      <motion.section
        className={styles.section_registration}
        transition={{ duration: 2 }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <img  onClick={handleForm}
         alt="#"
          className={styles.register}
          src="https://dqcgrsy5v35b9.cloudfront.net/cruiseplanner/assets/img/icons/login-w-icon.png"
        />
  {form && <motion.form onSubmit={e => handleLogin(e)}
              transition={{duration:1}}
              initial={{opacity:0,  y:50}}
              animate={{opacity:1, y:0}}>
          <h1>LOGIN</h1>
          <input
          className={styles.input_text}
            type="text"
            value={login}
            onChange={handleLoginChange}
            placeholder="login"
          />
          <input
          className={styles.input_text}
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="password"
          />
          
          <span className={styles.check_text}><input type="checkbox" className={styles.checkbox} />
          Подтвердите согласие на обработку</span>
          <Link to={'/admin'}><button type="submit">LOGIN</button></Link>
          <div>
            <span>Or login with</span>
            <div className={styles.messenger}>
              <div>
                <img width='25px' alt="#" src="data:image/png;base64,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" />
                <span>Facebook</span>
              </div>
              <div>
                <img width='25px' alt="#" src="data:image/png;base64,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" />
                <span>Google</span>
              </div>
            </div>
          </div>
        </motion.form> }
        
      </motion.section>
    </>
  );
};

export default Mainpage;

// TODO Если есть токен то добавить кнопку log out и очистить localStorage

// const handleLogOut = () => {
//   localStorage.clear();
//   window.location.reload();
// }
