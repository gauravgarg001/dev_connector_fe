import React, { useState } from 'react';
import './index.css';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

import { FaHouseChimneyWindow } from "react-icons/fa6";
import { LuUsers } from "react-icons/lu";

import { Link, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'

const data =[
    {
        icon: <FaHouseChimneyWindow size={15} color="black" />,
        activeIcon: <FaHouseChimneyWindow size={15} color="white"/>,
        name: 'Dashboard',
        link: 'admin/dashboard',
        active: true
    },
    {
        icon: <LuUsers size={15} color="black"/>,
        activeIcon: <LuUsers size={15} color="white"/>,
        name: "User Management",
        link: "admin/user-management",
        active: true,
    }
];

export default function SideNavbar(){
    const[isCollapse, setIsCollapse] = useState(false);
    const location = useLocation();

    return(
        <Sidebar
            breakPoint='lg'
            className={!isCollapse && 'sidebar-main'}
            backgroundColor='white'
            collapsed={isCollapse}
            toggled={false}
        >
            <div className={isCollapse ? "sidebar-header-collapse" : "sidebar-header"}>
                <button onClick={()=>setIsCollapse(!isCollapse)} className='p-0 border-0 bg-transparent'>
                    <p className='fs-4 fw-bold'>Assessment</p>
                </button>
            </div>
            <Menu
            menuItemStyles={{
                button: ({ level, active }) => {
                    if (level === 0 || level === 1)
                        return {
                            color: active ? 'white' : 'black',
                            background: active && 'linear-gradient(90deg, black, blue, orange)',
                            fontWeight: active ? 600 : 500,
                            fontSize: "15px",
                            borderRadius: '12px'
                        };
                    },
                }}
                className={isCollapse ? 'menu-collapsed' : "menu-not-collapsed"}
            >
                {
                    data?.map((menuData, index)=>{
                        return <MenuItem
                            key={index}
                            className='this-is-menuitem'
                            component={<Link className={!isCollapse &&"ps-0"} to={menuData?.link}/>}
                            active={location.pathname.includes(menuData?.link)}
                            icon={location.pathname.includes(menuData?.link) ? menuData?.activeIcon : menuData?.icon}
                        >
                            {menuData?.name}
                        </MenuItem>
                    })
                }
            </Menu>
        </Sidebar>
    );
}