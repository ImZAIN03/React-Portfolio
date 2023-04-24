import React, { useState } from 'react'
import { HiBars3, HiXMark } from "react-icons/hi2";
import MenuOverlay from './MenuOverlay';
const Header = () => {
    const [toggle,setToggle]=useState(false)
    const menuList = [
        {
            id:1,
            title: 'HOME'
        },
        {
            id:1,
            title: 'ABOUT'
        },
        {
            id:1,
            title: 'SERVICE'
        },
        {
            id:1,
            title: 'PORTFOLIO'
        },
        {
            id:1,
            title: 'CONTACT'
        },
    ]
    return (
        <div className='flex items justify-between'>
            <div>
                <h2 className='text-[24px] font-bold text-white'>MUHAMMED 
                <span className='text-blue-500'>ZAIN</span></h2>
            </div>
            <div className='hidden md:flex gap-4'>
                {menuList.map((item)=> (
                    <div>
                        <h2 className='text-white 
                        hover:border-[1px] border-yellow-500 rounded-full
                        text-[17px] px-3 py-1 cursor-pointer'>{item.title}</h2>
                    </div>
                ))}
                <h2 className='text-white 
                        hover:border-[1px] border-yellow-500 rounded-full
                        text-[17px] px-3 py-1 cursor-pointer hover:bg-gradient-to-r from-blue-500 to-gray-500'><a href='https://www.fiverr.com/s/ARoqNB'>Hire me</a></h2>
            </div>
            <div className="md:hidden">
            {!toggle ? <HiBars3 onClick={()=>setToggle(!toggle)} className="text-white text-[22px]"/>
            : <HiXMark onClick={()=>setToggle(!toggle)} className="text-white text-[22px]"/>}
            </div>
            {toggle?<MenuOverlay menuList={menuList}/>: null}
        </div>
    )
}

export default Header