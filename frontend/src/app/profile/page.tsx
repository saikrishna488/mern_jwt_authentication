"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import axios from 'axios';
import { GlobalStates } from '../../context/GlobalContext';

const page = () => {
  const { data , newData} = GlobalStates();
  const [email, setEmail] = useState(data.email || "");
  const [password, setPassword] = useState('');
  const [name, setName] = useState(data.name || "");
  const router = useRouter();

  const submit = async (e) => {
    e.preventDefault();
    if (name && email && password) {
      if (password.length > 5) {
        try {
          let res = await axios.put("https://mern-jwt-authentication-backend.vercel.app/api/users/profile", {
            _id: data._id,
            name, email, password
          });
          newData(res.data);
          toast("profile updated");
          router.push('/');
        }
        catch (err) {
          // toast(err.response.data.message);
          console.log(err);
        }
      }
      else {
        toast("password length should be greater than 6 characters");
      }
    }
    else {
      toast("please fill all the fields");
    }
  }
  useEffect(()=>{
    if(!data._id){
      router.push('/');
      toast("session expired try again");
    }
  },[])

  if(data._id){
    return (
      <>
        <div className="flex justify-center items-center h-screen bg-black ">
          <form onSubmit={submit}>
            <label htmlFor="website-admin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                @
              </span>
              <input type="text" id="website-admin" className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bonnie Green" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-3">Your Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
              </div>
              <input type="text" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
  
  
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4">Password</label>
            <input type="password" id="email" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
            <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">We’ll never share your details. Read our <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.</p>
  
            <button type="submit" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-3 mr-2 mb-2">Update Profile</button>
  
          </form>
  
        </div>
      </>
    )
  }
  else{
    return (
      <div>
        session expired 
      </div>
    )
  }
}

export default page;
