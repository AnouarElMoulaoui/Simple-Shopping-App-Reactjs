
import React, { useContext, useState } from 'react'
import axios from '../../axios';
const Login = () => {
    const [credential,setCredential] = useState({
        username : 'mor_2314',
        password : '83r5^_',
        error : ''
    });

    const authanticate = async () => {
         await axios.post("auth/login",{ 
            username : credential.username,
            password : credential.password
        })
         .then(res => {
            localStorage.setItem('token',res.data.token);
            window.location.replace("http://localhost:3000/");
         })
         .catch(error => setCredential({
            ...credential,
            error : 'login or password inccorrect'
        }));
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(credential.username.trim() === '' || credential.password.trim() === ''){
            setCredential({
                ...credential,
                error : 'all input required'
            });
        }
        else{
            setCredential({
                ...credential,
                error : ''
            });
            authanticate();
        }
        
    }

    const handleChange = (e) => {
        setCredential({
            ...credential,
            [e.target.name] : e.target.value
        })
    }

    return (
       <div className='h-screen flex justify-center items-center'>
             <div className="w-72 border mx-auto shadow-lg text-center p-3">
            <form className="flex flex-col gap-3" onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <h3 className="uppercase  font-bold text-lg">Login</h3>
                </div>
                <div>
                    <input onChange={(e) => handleChange(e)} value={credential.username} className="border w-full p-2" type="text" name="username" placeholder="username" />
                </div>
                <div>
                    <input onChange={(e) => handleChange(e)} value={credential.password} className="border w-full p-2" type="password" name="password" placeholder="password" />
                </div>
                <div>
                    <button className="bg-black w-full text-white uppercase font-medium py-2 rounded-md active:border active:border-black active:bg-white active:text-black">Login</button>
                </div>
                <div className='text-red-500 text-sm text-left pl-2'>
                    {credential.error}
                </div>
            </form>
        </div>
       </div>
    )
}

export default Login;