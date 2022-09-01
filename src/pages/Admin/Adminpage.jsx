import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './admin.module.css'
import axios from 'axios'
import { addStudent } from '../../features/studentSlice'


const Adminpage = () => {
    
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [group, setGroup] = useState("")

    const [image, setImage] = useState()
    const [file, setFile] = useState()
    
    const dispatch = useDispatch()

    const handleAddImage = useCallback(
        async (e) => {
            e.preventDefault()
            try {
                const data = new FormData()
                data.append('avatar', image)
                await axios.post('/upload', data, {
                    headers: {
                        'content-type': "multipart/form-data",
                    },
                }).then((res) => {
                    setFile(res.data.originalname)

                })
            } catch (error) {}
        }, [image]
    )

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleSurname = (e) => {
        setSurname(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleGroup = (e) => {
        setGroup(e.target.value)
    }

    const handleAddStudent = () => {
        dispatch(addStudent({ name, surname, image: file, group, email}))
        setName("")
        setSurname("")
        setEmail("")
        setGroup("")
        setImage(null)
        setFile(null)
    }

    return (
        <div className={styles.form}>
            <input className={styles.input_text} placeholder='Имя' value={name} onChange={e => handleName(e)}></input>
            <input className={styles.input_text} placeholder='Фамилия' value={surname} onChange={e => handleSurname(e)}></input>
            <input className={styles.input_text} placeholder='E-mail' type='email' value={email} onChange={e => handleEmail(e)}></input>
            <input className={styles.input_text} placeholder='id группы студента' value={group} onChange={e => handleGroup(e)}></input>

            <input className={styles.input_text} onChange={e => setImage(e.target.files[0])} type='file'></input>
            <div><button onClick={handleAddImage}>Добавить картинку</button></div>
            <div><button onClick={handleAddStudent}>Создать студента</button></div>
        </div>
    );
};

export default Adminpage;


// input type file вместо image