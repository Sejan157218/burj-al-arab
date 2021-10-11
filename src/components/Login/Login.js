
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';
import './Login.css'


const Login = () => {

    const {user,handlerGoogleSignIn} =useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const history = useHistory();
    const location  = useLocation();

    const redirect_ui = location.state?.from || "/home"

    const handlerGoogleLoin = ()=>{
        handlerGoogleSignIn()
        .then((result) => {
            history.push(redirect_ui)
        });
    }
    return (
        <div className="text-center">
            <h1 className="pb-3">Login</h1>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue="test" {...register("example")} />
                    <br/>
                    <input {...register("exampleRequired", { required: true })} />
                    <br/>
                    {errors.exampleRequired && <span>This field is required</span>}
                    <input type="submit" />
                </form>
                <p>Forget Password ?</p>
                <button className="w-100 button-login fb-bg">Login</button>
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