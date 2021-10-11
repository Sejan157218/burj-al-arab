
import { Email } from '@material-ui/icons';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';
import './Login.css'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const {user,handlerGoogleSignIn,handlerToSubmit,error,islogin,setLogin,} =useAuth();
    const onLogin = () => {
        handlerToSubmit(email,password);
    }
    const history = useHistory();
    const location  = useLocation();

    const redirect_ui = location.state?.from || "/home"

    const handlerGoogleLoin = ()=>{
        handlerGoogleSignIn()
        .then((result) => {
            history.push(redirect_ui)
        });
    }
    const handlerEmailChange=e=>{
        setEmail(e.target.value);
    }
    const handlerPassordChange=e=>{
        setPassword(e.target.value);
    }
    return (
        <div className="text-center">
            <h1 className="pb-3">Login</h1>
            <div>
            <div className="input-icons">
                    <i className="fa fa-user icon"></i>
                    <input onChange={handlerEmailChange} className="input-field w-100 h-50 mb-2" type="text" />
                    <br />
                    <i className="fas fa-lock icon"></i>
                    <input onChange={handlerPassordChange} className="input-field w-100 h-50" type="password" name="password" placeholder="Password" />
                </div>
                    <p onClick={()=>setLogin(true)}>Already Register</p>
                <p>Forget Password ?</p>
                <p>{error}</p>
                {islogin ?
                    <button onClick={onLogin} className="w-100 button-login fb-bg">Login</button>
                    : <button onClick={onLogin}  className="w-100 button-login fb-bg">register</button>
                }
                <p className="pt-3">Or Login With</p>
                <div>
                    <button onClick={handlerGoogleLoin} className="button-login me-3 google-bg"> <i class="fab fa-google me-2"></i>Google</button>
                    <button className="button-login fb-bg"><i class="fab fa-facebook-f me-2"></i>Facebook</button>
                </div>

                <div>
                    <button className="button-login me-3 git-bg"><i class="fab fa-github me-2"></i>Github</button>
                    <button className="button-login lin-bg"><i class="fab fa-linkedin-in me-2"></i>Linkedin</button>
                </div>
            </div>
        </div>
    );
};

export default Login;