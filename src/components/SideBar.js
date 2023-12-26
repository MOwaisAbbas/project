import React from 'react'
import logo from '../assets/images.png'
import { HiOutlineUserGroup } from "react-icons/hi2";
function SideBar() {
    return (
        <div className=' w-[220px] h-full bg-[#015249] rounded-br-3xl rounded-tr-2xl'>
            <div className='p-8'>
                <img src={logo} />
            </div>

            <div className='text-white flex justify-center items-center mt-10 '>
                <button className='bg-[#043933] flex justify-between items-center text-base gap-5 px-5 py-2 shadow-md rounded-xl active:opacity-75'><HiOutlineUserGroup /> CUSTOMERS</button>
            </div>
        </div>
    )
}

export default SideBar
