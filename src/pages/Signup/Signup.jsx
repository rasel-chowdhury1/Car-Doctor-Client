import React, { useContext } from 'react';
import img from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Signup = () => {

    const {createUser} = useContext(AuthContext)

    const handleSignUPButton = event =>{
        event.preventDefault();
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const user = {name,email,password}
        console.log(user);

        createUser(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">

            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
               
                <form onSubmit={handleSignUPButton} className="card-body">
                   <h1 className="text-3xl text-center font-bold">Sign Up!</h1>
                   <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Confirm Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                       <input type="submit" value="SIGN UP" className="btn btn-primary" />
                    </div>
                </form>
                <p className='my-4 text-center'>Already Have an Account? <Link to='/login' className='text-orange-600 font-bold'>Login</Link></p>
                </div>

                <div className="mr-12">
                    <img src={img} alt="login-image" />
                </div>
                
            </div>
        </div>
    );
};

export default Signup;