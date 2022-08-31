import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './admin.module.css'
import addStudent from '../../features/studentSlice'

const Adminpage = () => {
    
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [image, setImage] = useState("")
    const [group, setGroup] = useState("")
    
    const dispatch = useDispatch()

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleSurname = (e) => {
        setSurname(e.target.value)
    }
    const handleImage = (e) => {
        setImage(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleGroup = (e) => {
        setGroup(e.target.value)
    }
    const handleAddStudent = () => {
        dispatch(addStudent({ name, surname, image, group, email}), [dispatch])
    }

    return (
        <div className={styles.form}>
            <input className={styles.input_text} placeholder='Имя' value={name} onChange={e => handleName(e)}></input>
            <input className={styles.input_text} placeholder='Фамилия' value={surname} onChange={e => handleSurname(e)}></input>
            <input className={styles.input_text} placeholder='image_name' value={image} onChange={e => handleImage(e)}></input>
            <input className={styles.input_text} placeholder='E-mail' type='email' value={email} onChange={e => handleEmail(e)}></input>
            <input className={styles.input_text} placeholder='id группы студента' value={group} onChange={e => handleGroup(e)}></input>
            <div><button onClick={handleAddStudent}>Создать студента</button></div>
        </div>
    );
};

export default Adminpage;


// input type file вместо image