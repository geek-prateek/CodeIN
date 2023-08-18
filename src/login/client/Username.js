import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import avatar from "./assests/profile.png";
import styles from "./styles/Username.module.css";
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { usernameValidate } from './helper/validate'
import parul from './assests/parul.jpeg';
import { useAuthStore } from './store/store'

export default function Username(props) {

    const navigate = useLocation();
    const setUsername = useAuthStore(state => state.setUsername);
    
    const formik = useFormik({
        initialValues : {
            username : 'example123'
        },
        validate: usernameValidate,
        validateOnBlur : false,
        validateOnChange : false,
        onSubmit : async values =>{
            setUsername(values.username);
            navigate('/password')
        } 
    })

  return (
    
<div className={styles.backview}>
    <div className='container mx-auto' style={{margin: "34px 0px", marginTop: '20px'}}>
        <div className="row">
            <div className="col">
                <img src={parul} alt="parul" style={{width: '110%', height: '100%', objectFit: 'contain'}}/>
            </div>
        <Toaster position='bottom-center' reverseOrder={false}></Toaster>
        <div className="col">
        
        <div className={styles.login}>
   
 
        <div className='flex text-center h-screen'>
            <div className={styles.glass}>
                <div className="title flex flex-col items-center">
                    <h4 className='text-5xl font-bold' style={{color: props.mode === "dark" ? "white" : "black"}}>CodeIN</h4>
                    <span className='py-4 text-xl w-2/3 text-center text-gray-500' style={{color: props.mode === "dark" ? "white" : "black"}}>
                        See your growth and get practice support!
                    </span>
                </div>
                <form className='py-1' onSubmit={formik.handleSubmit}>
                    <div className='profile flex justify-center py-4'>
                        <img src={avatar} className={styles.profile_img} alt="avatar"/>
                    </div>

                    <div className="textbox flex flex-col items-center gap-6">
                        <input {...formik.getFieldProps('username')} className={styles.textbox} type="text" placeholder='Username'/>
                        <button className={styles.btn} type='submit'>Let's Go</button>
                    </div>

                    <div className="text-center py-4">
                        <span className='text-gray-500' style={{color: props.mode === "dark" ? "white" : "black"}}>Not a member ? <a style={{color: 'red'}} href="/regi">Register Now!</a></span>
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
