
import { Toast } from 'flowbite-react';
import React, { useContext } from 'react'
import toast, { Toaster } from "react-hot-toast";
import { HiX } from "react-icons/hi";
import {
    Link, useNavigate
} from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';

const notify = () => toast.custom(
    (t) => (
        <Toast>
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
                <HiX className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-normal">
                Email or Password is incorrect
            </div>
            <Toast.Toggle />
        </Toast>
    ),
    { id: "unique-notification", position: "top-right" }
);

export default function Login3() {



    const navigate = useNavigate('/')
    const { auth, setAuth } = useContext(AuthContext)



    const submit1 = (e) => {
        // notify()

        e.preventDefault();


        let email = document.getElementById("login_form").value
        let password = document.getElementById("login_password").value


        let users = JSON.parse(localStorage.getItem("users")) || [];
        let currentUser = users.find((user) => user.email === email && user.password === password);
        if (!currentUser) {
            return notify()
        }


        localStorage.setItem("currentUser", JSON.stringify(currentUser))

        setAuth(true)
        navigate('/')



        document.getElementById("login_form'").value = '';
        document.getElementById("login_password'").value = '';



    }






    return (
        <div className='w-full h-screen flex'>
            <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]'>
                <div className='w-full h-[550px] hidden md:block'>
                    <img className='w-full h-full' src="https://c4.wallpaperflare.com/wallpaper/388/937/143/anime-anime-girls-digital-art-artwork-portrait-display-hd-wallpaper-preview.jpg" alt="/" />
                </div>
                <div className='p-4 flex flex-col justify-around mt-10' >
                    <form onSubmit={submit1} autoComplete="off">
                        <h2 className='text-4xl font-bold text-center mb-8' >Login</h2>
                        <div>
                            <input className='border p-2 mr-2 w-full' type="Email" placeholder='Email' id='login_form' />
                            <br />
                            <br />
                            <input className='border p-2 w-full' type="password" placeholder='Password' id='login_password' />
                        </div>
                        <button className='w-full py-2 my-4 bg-blue-600 hover:bg-blue-400'>Sign In</button>
                        <p className='text-center'>Forgot Username or Password?</p>
                    </form>
                    <Link to="/Register"><p className='text-center'>Sign Up</p></Link>
                </div>
            </div>

            <Toaster />

        </div>

    )
}