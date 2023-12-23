import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const SocialLogin = () => {
    const {googleSignin} = useContext(AuthContext)
    // console.log(googleSignin);

    const handleGoogleSignIn = () =>{
        googleSignin()
        .then(result => {
            console.log(result.user)
        })
        .catch(error =>{
            console.log(error);
        })
    }

    return (
        <div>
            <div className="divider">OR</div>
            <div className='text-center'>
                <button onClick={handleGoogleSignIn} className='btn btn-circle btn-outline'>
                    GOOGLE
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;