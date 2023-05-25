"use client";
import Link from "next/link";
import { GlobalStates } from "../context/GlobalContext";
import { FaUserAlt } from 'react-icons/fa';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useState } from "react";
import { useCookies } from "react-cookie";
import {toast} from 'react-toastify';
import { useRouter } from "next/navigation";

const Header = () => {
    const [_cookie,setCookie] = useCookies();
    const { data, newData } = GlobalStates();
    const [show, setShow] = useState(false);
    const router = useRouter();

    const logout = () => {
        setCookie('jwt',"",{
            expires: new Date()
        })
        let data = {
            _id: null,
            name: null,
            email: null
        }
        newData(data);
        toast("logged out successfully");
    }
    if (data.name != null) {
        return (
            <header className="text-gray-600 body-font dark:bg-gray-800 fixed w-full top-0 h-24-">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        <span className="ml-3 text-xl">Mern Auth</span>
                    </Link>
                    <nav className=" md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <div onClick={() => setShow(true)} className="cursor-pointer flex flex-col justify-center items-center border-solid border-2 border-sky-5 justi00 rounded-xl py-2 px-2">
                            <div className="flex flex-row justify-center items-center">
                                <FaUserAlt className="text-white my-auto mr-1" />

                                <h4 className="text-white">{data.name}</h4>
                            </div>

                            <div>
                                <span className="text-blue-300 hover:text-white text-xs underline" >view profile</span>
                            </div>
                        </div>
                    </nav>

                </div>
                <div className={`${show ? "" : "hidden"} absolute right-0 top-4 bg-white p-4 space-y-4 rounded-xl border-2`}>
                    <div className="relative">
                        <AiFillCloseCircle onClick={() => setShow(false)} size={30} className="absolute right-0 cursor-pointer" />
                    </div>
                    <ul className="space-y-4">
                        <li> <strong>Name : </strong> {data.name}</li>
                        <li><strong>Email : </strong>{data.email}</li>
                        <li><strong>ID : </strong>{data._id}</li>
                    </ul>
                    <button onClick={()=> router.push('/profile')} className="bg-blue-500 hover:bg-blue-700 text-sm text-white font-bold p-1 rounded">
                        edit profile
                    </button>
                    <button onClick={logout} className=" ml-2 bg-blue-500 hover:bg-blue-700 text-sm text-white font-bold p-1 rounded">
                        logout
                    </button>
                </div>
            </header>
        )
    }
    return (
        <header className="text-gray-600 body-font dark:bg-gray-800 fixed w-full top-0">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <span className="ml-3 text-xl">Mern Auth</span>
                </Link>
                <nav className=" md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link href="/login" className="mr-5 hover:text-gray-900">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Login
                        </button>
                    </Link>
                    <Link href="/register" className="mr-5 hover:text-gray-900">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Sign up
                        </button>
                    </Link>
                </nav>

            </div>
        </header>

    )
}

export default Header
