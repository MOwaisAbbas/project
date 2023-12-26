import React, { useEffect, useState } from 'react'
import { FaPlus } from "react-icons/fa6";

import SideBar from '../../components/SideBar';
import axios from 'axios';
function Home() {
    const [users, setUsers] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);


    const getData = async () => {
        try {
            const response = await axios.get(`https://reqres.in/api/users?page=${currentPage}`);
            setUsers(response.data.data);
            setTotalPages(response.data.total_pages);
            console.log(users)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        getData()
    }, [currentPage])

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className='w-full h-screen flex bg-[#F3F3F3]'>
            <SideBar />
            <div className='border-2 w-full'>
                <header className='text-4xl font-bold shadow-md w-full bg-[#FFFFFF]'>
                    <p className='py-5 px-9'>
                        CUSTOMERS
                    </p>
                </header>
                <div className=''>
                    <button className='m-10 bg-gradient-to-r from-teal-700 to-emerald-900 text-white flex justify-between items-center text-base gap-5 px-5 py-2 shadow-md rounded-xl active:opacity-75'><FaPlus /> ADD NEW CUSTOMER</button>
                </div>
                <div className="overflow-x-scroll h-5/6 w-full">

                    <table className="w-5/6 mx-auto text-sm text-center ">
                        <thead className=" font-normal">
                            <tr className="border-b-2 ">
                                <th className="p-1"></th>
                                <th className="p-1">Customer ID</th>
                                <th className="p-1">Customer Name</th>
                                <th className="p-1">Email</th>
                                <th className="p-1"></th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {users?.map((v, i) => (
                                <tr className="border-b-2 cursor-pointer ">

                                    <td className="p-4">
                                        <img className='w-20'  src={v.avatar}/>
                                    </td>
                                    <td className="p-4">{v.id}</td>
                                    <td className="p-4">{v.first_name}{v.last_nam}</td>
                                    <td className="p-4">{v.email}</td>
                                    <td className="p-4 flex gap-3">
                                        <button className="border border-cus-green text-[#299838] rounded-md p-1 ms-2 text-cus-green bg-[#b0e1b7] w-28">Edit</button>
                                        <button className="border border-cus-red rounded-md p-1 text-[#dd2323] text-cus-red bg-[#ef9999] w-28">Delete</button>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className='flex'>
                        <button className='bg-white rounded-md p-3 py-1 text-center'>
                            1
                        </button>
                        <button className='bg-white rounded-md p-3 py-1 text-center'>
                            2
                        </button>
                    </div>
                </div>


            </div >
        </div >
    )
}

export default Home
