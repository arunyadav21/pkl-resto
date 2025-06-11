import React, { useState } from 'react'
import { RxCaretDown } from "react-icons/rx";
import { FaSearchMinus } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { MdAssignmentInd } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa6";


function Header() {
    const[toggle , setToggle]=useState(false);

    const showSideMenu = () => {
        setToggle(true)
    }

    const hideSideMenu = () => {
setToggle(false);
} 

const link =[
    {
        icon:<FaSearchMinus />,
        name: "Search"
    },
    {
        icon:<BiSolidOffer />,
        name: "Offers",
       sup: "New"
    },
      {
        icon:<LiaHandsHelpingSolid />,
        name: "Help"
    },
      {
        icon:<MdAssignmentInd />,
        name: "Sign In"
    },
      {
        icon:<FaCartPlus />,
        name: "Cart",
        sup:2
    },
]

 return (
        <>
        <div className='black-overlay w-full h-full fixed duration-500'onClick={hideSideMenu} style={{
            opacity: toggle ? 1 : 0,
            visibility: toggle ? "visible" : "hidden", zIndex: 99999999
        }}
        >
            <div onClick={(e)=> {
                e.stopPropagation();
            }} className='w-[500px] bg-white h-full absolute duration-[400ms]'
            style={{
                left: toggle ? '0%': '-100%'
            }}
            ></div>
        </div>
        <header className=  'p-[15px] shadow-xl sticky top-0 bg-white z-[9999]'>
         <div className='max-w-[1200px] max-auto flex items-center'>
          <div className='w-[100px]'>
            <img src='logo.png' className='w-full'/>
          </div>
          <div className=''>
           <span className='font-bold border-b-[3px]'> Sector 20</span> Panchkula HR India
           <RxCaretDown fontSize={25} className='inline text-[#fc8019]
           cursor-pointer' onClick={showSideMenu}/>
          </div>
          <nav className='flex list-non gap-10 ml-auto text-[18px] font-semibold'>
            {
                link.map(
                    (link , index)   => {
                        return<li key={index} className='flex hover:text-[#fc8019] item-center gap-2'>
                            {link.icon}
                            {link.name}
                          <sup className='text-red-400'>{link.sup}</sup>
                        </li>
                    }             
                )
            }

          </nav>
         </div>
        </header>
        </>
    )
}

export default Header
