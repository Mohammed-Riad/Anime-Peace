import React, { useContext } from 'react'
import {
    Link, useNavigate
} from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';

export default function Login3() {

    const navigate = useNavigate('/')
    const {setAuth} = useContext(AuthContext)

    const submit1 = (e) => {

        e.preventDefault();

        function User(first_name, email, password, userID) {
            this.userID = userID;
            this.first_name = first_name;
            this.email = email;
            this.password = password;
        }


        // get inputs values
        let fname = document.getElementById("fname").value

        let email = document.getElementById("email").value
        let password = document.getElementById("password").value

        //check if email is exist
        let users = JSON.parse(localStorage.getItem("users")) || [];

        let isExist = users.find((user) => user.email === email);
        if (isExist) {
            return alert('The email is used!');
        }


        console.log(isExist)

        //add new user
        let userID = users.sort()[users.length - 1]?.userID + 1 || 1;
        let newUser = new User(fname, email, password, userID);
        users.push(newUser);





        localStorage.removeItem("users");
        localStorage.setItem("users", JSON.stringify(users));
        // alert("welcome " + users.first_name);

        //clear register form
        document.getElementById("fname").value = '';
        document.getElementById("email").value = '';
        document.getElementById("password").value = '';

        // setAuth(true)
        navigate('/Login')
      

    }

    return (
        <div className='w-full h-screen flex'>
            <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]'>
                <div className='w-full h-[550px] hidden md:block'>
                    <img className='w-full h-full' src="https://c4.wallpaperflare.com/wallpaper/227/583/604/anime-anime-girls-digital-art-artwork-2d-hd-wallpaper-preview.jpg" alt="/" />
                </div>
                <div className='p-4 flex flex-col justify-around mt-10' >
                    <form id='form' onSubmit={submit1}>
                        <h2 className='text-4xl font-bold text-center mb-8' >Register</h2>
                        <div>
                            <input className='border p-2 mr-2 w-full' type="text" placeholder='Username' id="fname" />
                            <br />
                            <br />
                            <input className='border p-2 w-full' type="email" placeholder='Email' id="email" />
                            <br />
                            <br />
                            <input className='border p-2 w-full' type="password" placeholder='Password' id="password" />


                        </div>
                        <button className='w-full py-2 my-4 bg-blue-600 hover:bg-blue-400'  >Sign In</button>
                        <p className='text-center'>Forgot Username or Password?</p>
                    </form>


                    <Link to="/Login"><p className='text-center'>Sign in</p></Link>
                </div>
            </div>
        </div>
    )
}




