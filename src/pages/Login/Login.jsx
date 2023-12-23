import React, { useContext } from 'react';
import img from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {

    const {signinUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/"

    const handleLoginButton = event =>{
        event.preventDefault();
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const user = {email,password}
        console.log(user);

        signinUser(email,password)
        .then(result => {
            console.log(result.user);
            navigate(from, {replace: true})
            
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">

            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
               
                <form onSubmit={handleLoginButton} className="card-body">
                   <h1 className="text-3xl text-center font-bold">Login now!</h1>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                       <input type="submit" value="LOGIN" className="btn btn-primary" />
                    </div>
                </form>
                <SocialLogin></SocialLogin>
                <p className='my-4 text-center'>New to Car Doctors <Link to='/signUp' className='text-orange-600 font-bold'>Sign Up</Link></p>
                </div>

                <div className="mr-12">
                    <img src={img} alt="login-image" />
                </div>
                
            </div>
        </div>
    );
};

export default Login;