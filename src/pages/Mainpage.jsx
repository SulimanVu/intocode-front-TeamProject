import React from "react";
import styles from "./mainpage.module.css";
import { motion } from "framer-motion";
import logo from "../images/intocode_3.png"

const Mainpage = () => {
  return (
    <>
      <section className={styles.first_section}>
        <motion.img width='60px'
         src={logo} className={styles.logo}
         transition={{duration: 3 }}
         initial={{opacity: 0, y:-50}}
         animate={{opacity:1, y:0}}
         />

        <motion.p
          className={styles.into_text}
          transition={{ duration: 3 }}
          initial={{ opacity: 0, y: 100 , fontSize: '20px'}}
          animate={{
            opacity: [0, 0.4, 0.8, 1],
            y: 0,
            scale: [1, 1.5, 1],
            fontSize:"100px",
            textShadow: "0 0 25px rgb(26, 26, 216)"
          }}
        >
          INTOCODE
        </motion.p>
      </section>

      <section className={styles.second_section}>
          <motion.div
            transition={{duration: 3}}
            initial={{borderBottom: 'none'}}
            animate={{
                borderBottom:'3px solid #fff'
            }}
            >
            Почуму стоит выбирать именно нас? Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolore rem porro eum?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto placeat voluptates repellendus blanditiis error rem ab? Voluptatibus sed quod odio iste molestiae ex eum autem ratione, similique ducimus qui debitis!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia velit sunt assumenda ut ipsa, quae nisi ducimus est voluptatibus hic, quisquam vitae, minima aperiam natus. Doloribus odio temporibus aut labore!<br/>
            <div>
                Подробнее
            </div>
          </motion.div>
          <motion.div
            transition={{duration: 3}}
            initial={{borderBottom: 'none'}}
            animate={{
                borderBottom:'3px solid #fff'
            }}
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolore rem porro eum?Iuto ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolore rem porro eum?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, quaerat optio? Suscipit amet cumque impedit. Dolorem adipisci, expedita sed molestias laborum repellat non architecto deserunt, minus explicabo sequi facilis ipsam?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ad voluptatibus eveniet omnis nisi, quae iste at iusto ab nesciunt illo inventore veniam porro voluptates laborum velit explicabo fuga. Quis.<br/>
            <div>
                Подробнее
            </div>
          </motion.div>
      </section>
      <motion.section className={styles.section_about}
        transition={{duration: 2}}
        initial={{opacity:0, y:100}}
        whileInView={{
            opacity:1,
            y:0
        }}
      >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, repellat reiciendis. Saepe ea quae expedita voluptatem, doloremque eos rem, perspiciatis, autem dolor veritatis nam hic dicta consectetur dolorem mollitia molestiae!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quo quas fugit nostrum, explicabo magnam quibusdam ullam, enim iure ut illo voluptatem provident nesciunt! Sunt repellat reprehenderit delectus eaque in!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sed harum optio impedit ducimus illum architecto, doloremque aliquam sequi! Inventore assumenda harum deleniti debitis dicta enim modi exercitationem necessitatibus nemo.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis quis magni autem, iusto, alias libero ipsam labore eius ea assumenda iure, neque eaque ut vitae voluptates? Atque labore sunt dolore!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quam, cum repellendus quia laboriosam expedita voluptas qui nesciunt dolore libero aliquid labore quaerat totam necessitatibus doloremque tempore cupiditate amet recusandae!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque soluta, dolorum voluptates, perferendis sit quo aspernatur reprehenderit totam, voluptas aperiam dicta iste dolor. Ea nobis ex nostrum distinctio ab ipsa.
      </motion.section>
      <motion.section className={styles.section_registration}
      transition={{duration:2}}
      initial={{opacity:0, y:50}}
      whileInView={{opacity:1, y:0}}
      >
            <img className={styles.register} src='https://dqcgrsy5v35b9.cloudfront.net/cruiseplanner/assets/img/icons/login-w-icon.png' />
      </motion.section>
    </>
  );
};

export default Mainpage;
