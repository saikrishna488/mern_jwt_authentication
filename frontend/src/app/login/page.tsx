/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Header from "../../components/Header";
import Link from "next/link";
import { useEffect, useState } from 'react';
import { GlobalStates } from "../../context/GlobalContext";
import axios from 'axios';
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import { toast } from 'react-toastify';


const page = () => {
    const [_cookie, setCookie] = useCookies();
    const { data, newData } : (any) = GlobalStates() || undefined;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const submit = async (e:any) => {
        e.preventDefault();
        if (email && password) {
            if (password.length < 6) {
                toast("password must be atleast of 6 characters")
            }
            else {
                try {
                    let res = await axios.post('https://mern-jwt-authentication-backend.vercel.app/api/users/auth', {
                        email, password
                    });
                    newData(res.data);
                    setCookie("jwt", res.data.token, {
                        path: "/",
                        maxAge: 30 * 24 * 60 * 60 * 1000,
                        sameSite: true,
                    });
                    toast("Login successful");
                    router.push('/');
                }
                catch (err :any) {
                    toast(err.response.data.message);
                    console.log(err);
                }

            }
        }
        else {
            toast("Enter both fields");
        }
    }
    useEffect(() => {
        if (data._id != null) {
            toast("Logout To login again");
            router.push('/');
        }
        
    }, []);

    if (data._id == null) {
        return (
            <>
                <section className="bg-gray-50 dark:bg-gray-900 h-screen overflow-hidden">
                    <Header />
                    <div className="flex flex-col items-center mt-20 px-6 py-8 mx-auto md:h-screen lg:py-0 mt-28">
                        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Sign in to your account
                                </h1>
                                <form className="space-y-4 md:space-y-6" onSubmit={submit}>
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required={true} value={email} onChange={e => setEmail(e.target.value)} />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} onChange={e => setPassword(e.target.value)} value={password} />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-start">
                                            <div className="flex items-center h-5">
                                                <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required={true} />
                                            </div>
                                            <div className="ml-3 text-sm">
                                                <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                            </div>
                                        </div>
                                        <a href="#" className="text-sm font-medium text-white hover:underline dark:text-primary-500">Forgot password?</a>
                                    </div>
                                    <button type="submit" className=" w-full text-white bg-blue-400 hover:bg-blue-300 rounded py-2 ">Sign in</button>
                                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Don’t have an account yet? <Link href="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </>

        )
    }
    else {
        return (
            <div className="flex h-screen justify-center items-center">
                logout to login again
            </div>
        )
    }


}



export default page;


