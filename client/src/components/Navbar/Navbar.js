import { useContext, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/MEC_LOGO.png';
import ProfilePic from '../../assets/images/profile.jpg';
import { Store } from "../../Store";
import { Links } from './Links';
const Navbar = () => {
    const [open, setOpen] = useState(false)
      const navigate = useNavigate();
      const { state, dispatch: ctxDispatch } = useContext(Store);
      const { userInfo } = state;


    const logoutHandler = (e)=>{
        e.preventDefault()
        ctxDispatch({ type: 'USER_SIGNOUT' });
        localStorage.removeItem('userInfo');
        window.location.href = '/';
    }
  return (
   <nav className='bg-slate-600 text-white p-2 '>
    <div >
        <div className='flex items-center font-medium justify-between'>
            <div className='z-50 p-1 md:w-auto w-full flex justify-between items-center sticky'>
                <div className='flex gap-2'>
                    <img src={Logo} alt="logo" className='h-12 md:cursor-pointer'></img>
                    <div className='hidden  md:block first-letter:md:cursor-pointer'>
                        <p className='bold text-3xl'>Central Library</p>
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
            <div >
                {!userInfo?
                    <div className='md:flex md:gap-2 justify-evenly hidden md:block'>
                        <Link to="/login" className=' text-white no-underline'>
                           <button className='px-9 py-3 rounded-sm bg-blue-600 text-white hover:bg-blue-800 border-none'>Login</button>
                        </Link>
                    </div>
                    :
                    <div className='flex'>
                        <div className='hidden md:block'>
                            {
                                userInfo.isAdmin?
                                <Link to="/admin" className=' text-white no-underline pr-4 flex gap-4 items-center'>
                                    <img src={ProfilePic} alt="Profile" className= "w-10 h-10 outline-double rounded-full " />
                                    <p className='text-gray-300'>{userInfo.name}</p>
                                </Link>
                                :
                                <Link to="/profile" className=' text-white no-underline pr-4 flex gap-4 items-center'>
                                    <img src={ProfilePic} alt="Profile" className= "w-10 h-10 outline-double rounded-full " />
                                    <p className='text-gray-300'>{userInfo.name}</p>
                                </Link>
                            }
                            
                        </div>
                        <div className='md:flex md:gap-2 justify-evenly hidden md:block'>
                         
                            <button onClick={logoutHandler} className='px-9 py-3 rounded-sm bg-red-600 text-white hover:bg-red-800 border-none'>Logout</button>
                       
                        </div>
                     </div>
                    
                }
            </div>
           
        </div>

        {/* Mobile Nav */}
        {
            <ul className={`
            md:hidden bg-slate-600 z-10 fixed w-full top-0 overflow-y-auto bottom-0 py-20 pl-4 ml-0
            duration-500 ${open ? "left-0" : "left-[-120%]"}
            `}
            onClick={()=>setOpen(!open)}
            >
            {/* <li><Link to='/' className='py-7 px-2 inline-block'>Home</Link></li> */}
            <Links/>
            <div >
            { userInfo ?
                    <div className='flex justify-evenly'>
                        <div className=' md:hidden'>
                            {
                                userInfo.isAdmin?
                                <Link to="/admin" className=' text-white no-underline pr-4 flex gap-4 items-center'>
                                    <img src={ProfilePic} alt="Profile" className= "w-10 h-10 outline-double rounded-full " />
                                    <p className='text-gray-300'>{userInfo.name}</p>
                                </Link>
                                :
                                <Link to="/profile" className=' text-white no-underline pr-4 flex gap-4 items-center'>
                                    <img src={ProfilePic} alt="Profile" className= "w-10 h-10 outline-double rounded-full " />
                                    <p className='text-gray-300'>{userInfo.name}</p>
                                </Link>

                            }
                            
                        </div>
                        <div className='md:flex md:gap-2 justify-evenly  md:hidden'>
                            <button className=' text-white no-underline px-9 py-3 rounded-sm bg-red-600 text-white hover:bg-red-800 border-none'>Logout</button>
                        </div>
                    </div>
                    :
                    <div className='flex md:gap-2'>
                        <Link to="/login" className=' text-white no-underline'>
                           <button className='px-12 py-3 rounded-sm bg-blue-600 text-white hover:bg-blue-800 border-none'>Login</button>
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