import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import avatar from "./assests/profile.png";
import styles from "./styles/Username.module.css";
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { registerValidation } from './helper/validate';
import convertToBase64 from './helper/convert';
import parul from './assests/parul.jpeg';

export default function Register(props) {

  const [file, setFile] = useState()

    const formik = useFormik({
        initialValues : {
          email : '',
          username: '',
            password : ''
        },
        validate: registerValidation,
        validateOnBlur : false,
        validateOnChange : false,
        onSubmit : async values =>{
          values = await Object.assign(values, { profile : file || ''})
            console.log(values);
        } 
    })

    /**if upload doesn't support */
    const onUpload = async e => {
      const base64 = await convertToBase64(e.target.files[0]);
      setFile(base64);
    }

  return (
    <div className='container mx-auto' style={{margin: "34px 0px", marginTop: '10px'}}>
      <div className={styles.backview}>
      <div className="row">
            <div className="col-1">
                
            </div>

        <Toaster position='top-center' reverseOrder={false}></Toaster>
        <div className="col">
        
        <div className={styles.login}>

        <div className='flex text-center h-screen'>
            <div className={styles.glass}>
                <div className="title flex flex-col items-center">
                    <h4 className='text-5xl font-bold' style={{color: props.mode === "dark" ? "white" : "black"}}>Register</h4>
                    <span className='py-4 text-xl w-2/3 text-center text-gray-500' style={{color: props.mode === "dark" ? "white" : "black"}}>
                        Happy to join you !
                    </span>
                </div>
                <form className='py-1' onSubmit={formik.handleSubmit}>
                    <div className='profile flex justify-center py-4'>
                      <label htmlFor='profile'>
                        <img src={file || avatar} className={styles.profile_img} alt="avatar"/>
                      </label>
                      <input onChange={onUpload} type="file" id='profile' name='profile'/>
                    </div>

                    <div className="textbox flex flex-col items-center gap-6">
                        <input {...formik.getFieldProps('email')} className={styles.textbox} type="text" placeholder='Email*'/>
                        <input {...formik.getFieldProps('username')} className={styles.textbox} type="text" placeholder='Username*'/>
                        <input {...formik.getFieldProps('password')} className={styles.textbox} type="password" placeholder='Password*'/>
                        <button className={styles.btn} type='submit'>Register</button>
                    </div>

                    <div className="text-center py-4">
                        <span className='text-gray-500'>Already Registered ? <a style={{color: 'red'}} href="/user">Login Now</a></span>
                    </div>
                </form>
            </div>
            </div>
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}
