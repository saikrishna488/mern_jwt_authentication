(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[178],{9701:function(e,r,t){Promise.resolve().then(t.bind(t,5151))},5151:function(e,r,t){"use strict";t.r(r);var a=t(9268),l=t(6006),s=t(6008),d=t(474),n=t(4214),i=t(2687);r.default=()=>{let{data:e,newData:r}=(0,i.GlobalStates)(),[t,o]=(0,l.useState)(e.email||""),[u,c]=(0,l.useState)(""),[b,m]=(0,l.useState)(e.name||""),g=(0,s.useRouter)(),x=async a=>{if(a.preventDefault(),b&&t&&u){if(u.length>5)try{let a=await n.Z.put("https://mern-jwt-authentication-backend.vercel.app/api/users/profile",{_id:e._id,name:b,email:t,password:u});r(a.data),(0,d.Am)("profile updated"),g.push("/")}catch(e){console.log(e)}else(0,d.Am)("password length should be greater than 6 characters")}else(0,d.Am)("please fill all the fields")};return((0,l.useEffect)(()=>{e._id||(g.push("/"),(0,d.Am)("session expired try again"))}),e._id)?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"flex justify-center items-center h-screen bg-black ",children:(0,a.jsxs)("form",{onSubmit:x,children:[(0,a.jsx)("label",{htmlFor:"website-admin",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Name"}),(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)("span",{className:"inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600",children:"@"}),(0,a.jsx)("input",{type:"text",id:"website-admin",className:"rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Bonnie Green",value:b,onChange:e=>m(e.target.value)})]}),(0,a.jsx)("label",{htmlFor:"email-address-icon",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-3",children:"Your Email"}),(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",children:(0,a.jsxs)("svg",{"aria-hidden":"true",className:"w-5 h-5 text-gray-500 dark:text-gray-400",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)("path",{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}),(0,a.jsx)("path",{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"})]})}),(0,a.jsx)("input",{type:"text",id:"email-address-icon",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"name@gmail.com",value:t,onChange:e=>o(e.target.value)})]}),(0,a.jsx)("label",{htmlFor:"email",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4",children:"Password"}),(0,a.jsx)("input",{type:"password",id:"email","aria-describedby":"helper-text-explanation",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"password",value:u,onChange:e=>c(e.target.value)}),(0,a.jsxs)("p",{id:"helper-text-explanation",className:"mt-2 text-sm text-gray-500 dark:text-gray-400",children:["We’ll never share your details. Read our ",(0,a.jsx)("a",{href:"#",className:"font-medium text-blue-600 hover:underline dark:text-blue-500",children:"Privacy Policy"}),"."]}),(0,a.jsx)("button",{type:"submit",className:"text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-3 mr-2 mb-2",children:"Update Profile"})]})})}):(0,a.jsx)("div",{children:"session expired"})}},2687:function(e,r,t){"use strict";t.r(r),t.d(r,{GlobalContext:function(){return s},GlobalProvider:function(){return d},GlobalStates:function(){return n}});var a=t(9268),l=t(6006);let s=(0,l.createContext)(),d=e=>{let{children:r}=e,[t,d]=(0,l.useState)({_id:null,name:null,email:null});return(0,a.jsx)(s.Provider,{value:{data:t,newData:e=>{d(e)}},children:r})},n=()=>(0,l.useContext)(s)}},function(e){e.O(0,[959,667,488,744],function(){return e(e.s=9701)}),_N_E=e.O()}]);