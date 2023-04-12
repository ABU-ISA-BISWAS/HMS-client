import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading';
import hospital from '../../assets/icons/hospital.png';


const AdminLogin = () => {
    // const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit, getValues } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, passResetError] = useSendPasswordResetEmail(
        auth
    );
    const [token] = useToken(user);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (token) {
            // navigate(from,{replace:true}); 
            navigate('/dashboard');
        }
    }, [token, from, navigate])

    if (loading || sending) {
        return <Loading></Loading>
    }
    let signInError;
    if (error  || passResetError) {
        signInError = <p className='text-red-500'>{error?.message}</p>
    }

    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);

    };
    const resetPassword = async () => {
        const email = getValues("email");
        console.log(email);

        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sending password reset email');
        }
        else {
            toast('Please enter your email address');
        };

    }

    return (
        <div className='flex bg-slate-900 '>



            <div className='flex h-screen justify-center items-center '>

                <div class="card w-96 mb-32">
                    <div class="card-body">
                        <h2 class="text-left text-3xl font-semibold text-primary "> Admin Login</h2>

                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span className="label-text text-white">Email</span>
                                </label>

                                <input



                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a Valid Email'
                                        }
                                    })}
                                    type="email" placeholder="Your Email" class="input input-sm input-bordered w-full max-w-xs" />


                                <label class="label">
                                    {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}

                                </label>

                            </div>

                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span className="label-text text-white">Password</span>
                                </label>

                                <input  {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                                    type="password" placeholder="Password" class="input input-sm input-bordered w-full max-w-xs" />


                                <label class="label">
                                    {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}

                                </label>

                            </div>


                            {signInError}
                            <input className='btn btn-sm hover:bg-sky-400 w-full bg-indigo-600 text-white max-w-xs' type="submit" value="Login" />
                            {/* <p>Forgotten password? <button onClick={resetPassword} className="text-red-500">Reset Password</button></p> */}
                        </form>
                        {/****************************************************************/}
                       

                        {/* <p>Don't Have an Account? <Link className='text-primary' to="/signup">Create new account</Link></p> */}

                        {/* <div class="divider">OR</div>
                        <button onClick={() => signInWithGoogle()}
                            class="btn btn-outline hover:bg-sky-400"> <img className='w-8 mr-3' src={google} alt="" />  Continue With Google</button> */}
                    </div>
                    <ToastContainer></ToastContainer>
                </div>

            </div>

            <div>
                {/* <img style={{ width: "1000px" }} className='p-10 max-h-screen  ' src="https://i.ibb.co/4scwSbk/hms.png" alt="" /> */}
            </div>

        </div>
    );
};

export default AdminLogin;
