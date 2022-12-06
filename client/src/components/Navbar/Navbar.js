import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/MEC_LOGO.png';
import { Links } from './Links';
const Navbar = () => {
   const [open, setOpen] = useState(false);
   const [logged, setLogged] = useState(false)
  return (
   <nav className='bg-white p-2 '>
    <div >
        <div className='flex items-center font-medium justify-between'>
            <div className='z-50 p-1 md:w-auto w-full flex justify-between items-center sticky'>
                <div className='flex gap-2'>
                    <img src={Logo} alt="logo" className='h-12 md:cursor-pointer'></img>
                    <div className='hidden  md:block first-letter:md:cursor-pointer'>
                        <p className='bold'>Central Library</p>
                        <p>Mymensingh Engineering College</p>
                    </div>
                </div>
                <h1 className='md:hidden'>MEC LIBRARY</h1>
                <div className='md:hidden text-lg  font-bold'  onClick={()=>setOpen(!open)}  > 
                    {open?<AiOutlineClose/>:<AiOutlineMenu/>}
                </div>
            </div>
            <ul className=' md:flex hidden uppercase items-center gap-8 list-none text-black no-underline font-extralight'>
                <Links/>
            </ul>
            <div onClick={()=>{setLogged(!logged)}}>
                {logged?
                    <div className='md:flex md:gap-2 justify-evenly hidden md:block'>
                        <Link to="/sign-up" className=' text-white no-underline'>
                           <button className='px-9 py-3 rounded-sm bg-blue-600 text-white hover:bg-blue-800 border-none'>Sign Up</button>
                        </Link>
                        <Link to="/login" className=' text-white no-underline'>
                           <button className='px-9 py-3 rounded-sm bg-blue-600 text-white hover:bg-blue-800 border-none'>Login</button>
                        </Link>
                    </div>
                    :
                    <div className='hidden md:block'>
                       <Link to="/profile" className=' text-white no-underline'>
                           <button className='px-9 py-3 rounded-sm bg-blue-600 text-white hover:bg-blue-800 border-none'>Profile</button>
                        </Link>
                    </div>
                }
            </div>
           
        </div>

        {/* Mobile Nav */}
        {
            <ul className={`
            md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-20 pl-4 ml-0 uppercase
            duration-500 ${open ? "left-0" : "left-[-120%]"}
            `}>
            {/* <li><Link to='/' className='py-7 px-2 inline-block'>Home</Link></li> */}
            <Links/>
            <div onClick={()=>{setLogged(!logged)}}>
            {logged?
                    <div className='md:flex md:gap-2 justify-evenly hidden md:block'>
                        <Link to="/sign-up" className=' text-white no-underline'>
                           <button className='px-9 py-3 rounded-sm bg-blue-600 text-white hover:bg-blue-800 border-none'>Sign Up</button>
                        </Link>
                        <Link to="/login" className=' text-white no-underline'>
                           <button className='px-9 py-3 rounded-sm bg-blue-600 text-white hover:bg-blue-800 border-none'>Login</button>
                        </Link>
                    </div>
                    :
                    <div className='hidden md:block'>
                       <Link to="/profile" className=' text-white no-underline'>
                           <button className='px-9 py-3 rounded-sm bg-blue-600 text-white hover:bg-blue-800 border-none'>Profile</button>
                        </Link>
                    </div>
            }
            </div>
          
           
        </ul>
        }
        
    </div>
   </nav>
  )
}

export default Navbar;