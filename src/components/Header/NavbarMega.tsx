"use client"
import React, { FC, useState } from 'react';
import Link from 'next/link';

export interface MainNav2LoggedProps { }

const NavbarMega: FC<MainNav2LoggedProps> = () => {
    const [hoverIndex, setHoverIndex] = useState(null);

    const DropdownMenu = ({ item }) => (
        <div className="absolute top-full left-0 w-full flex transition-all duration-200    right-0 inset-0  z-[99] shadow-lg">
            <div
                className={`flex  gap-8 bg-sky-800 h-[400px] bg-opacity-90 rounded shadow    p-5`}
                style={{ background: "", color: "white", zIndex: 9999 }}
            >
                <div className='  flex flex-col gap-5 w-[300px] border-r border-white'>
                    {item.leftSide.map((ite:any,i:any)=>{
                        return    <div key={i} className='px-2 text-sm text-white hover:text-blue-300'>{ite.name} </div>
                    })}
                 
                  
                </div>
                 <div className='  flex-1 flex flex-wrap  gap-5 '>
                    {item.rightSide.map((ite:any,i:any)=>{
                        return    <div key={i} className='px-2 text-sm text-white  hover:text-blue-300'>{ite.name} </div>
                    })}
                 
                  
                </div>
            </div>
        </div>
    );

    return (
        <>
            <div className={`nc-MainNav2Logged relative z-10`}>
                <div className="container">
                    <div className=" flex justify-between space-x-4 xl:space-x-8">
                        <div className="flex-shrink-0 relative flex items-center max-w-[1440px] justify-end text-neutral-700 dark:text-neutral-100 ">
                            <div className="hidden xl:flex space-x-4">
                                {MegaMenu.map((item, index) => (
                                    <div
                                        className="  h-auto inline-flex items-center justify-center rounded gap-2 px-3 py-1.5 text-sm font-medium cursor-pointer bg-white hover:bg-primary-100 text-gray-600 self-center group"
                                        key={index}
                                        onMouseEnter={() => setHoverIndex(item.name)}
                                        onMouseLeave={() => setHoverIndex(null)}
                                    >
                                        <div className="rounded gap-2 px-3 flex items-center py-1.5 text-sm font-medium cursor-pointer text-gray-600 self-center">
                                            <img src={item.logo} alt="menu" className="h-5 w-5" />
                                            {item.name}
                                        </div>
                                        {hoverIndex === item.name &&
                                             
                                                <DropdownMenu item={item} />
                                             
                                        } 
 
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavbarMega;




const MegaMenu = [
    {
        name: 'AI Models',
        link: '',
        logo: 'https://promptbase.com/assets/icons/3d_outline.svg',
        leftSide: [
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },

            { name: "All Prompts", heading: "All Prompts" }
        ],
        rightSide: [
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
              { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
              { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
              { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
              { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
        ]
    },
    {
        name: 'Art & Illustrations',
        link: '',
        logo: 'https://promptbase.com/assets/icons/art_pallette_outline.svg', leftSide: [
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },

            { name: "All Prompts", heading: "All Prompts" }
        ],
        rightSide: [
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
              { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
              { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
              { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
              { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
        ]

    },
    {
        name: 'Logos & Icon',
        link: '',
        logo: 'https://promptbase.com/assets/icons/logos_icons_outline.svg', leftSide: [
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },

            { name: "All Prompts", heading: "All Prompts" }
        ],
        rightSide: [
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
              { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
              { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
              { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
              { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
        ]
    },
    {
        name: 'Graphics & Design',
        link: '',
        logo: 'https://promptbase.com/assets/icons/image_outline.svg', leftSide: [
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },

            { name: "All Prompts", heading: "All Prompts" }
        ],
        rightSide: [
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
              { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
              { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
              { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
              { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
        ]
    },
    {
        name: 'Productivity & Writing',
        link: '',
        logo: 'https://promptbase.com/assets/icons/draw_outline.svg' ,leftSide: [
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },

            { name: "All Prompts", heading: "All Prompts" }
        ],
        rightSide: [
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
              { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
              { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
              { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
              { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
        ]
    },
    {
        name: 'Marketing & Business',
        link: '',
        logo: 'https://promptbase.com/assets/icons/briefcase_outline.svg', leftSide: [
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },

            { name: "All Prompts", heading: "All Prompts" }
        ],
        rightSide: [
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
              { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
              { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
              { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
              { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
        ]
    },
    {
        name: 'Photography',
        link: '',
        logo: 'https://promptbase.com/assets/icons/camera_outline.svg' ,leftSide: [
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },

            { name: "All Prompts", heading: "All Prompts" }
        ],
        rightSide: [
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
              { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
              { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
              { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
              { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
            { name: "All Prompts", heading: "All Prompts" },
        ]
    },

]