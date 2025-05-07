import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import SideNavbar from '../Sidebar'
import Navbar from '../Navbar/index.jsx'
import PublicFooter from '../Footer/PublicFooter'
export default function Layout(){
    return <div className='d-flex' style={{height: '100vh'}}>
        <SideNavbar/>
        <div style={{width: '100%'}}>
            <Navbar/>
            <div style={{height: '85vh', overflow: 'auto', scrollbarWidth: 'thin', background: '#F5F5F5'}}>
                <Suspense>
                    <Outlet/>
                </Suspense>
            </div>
            <PublicFooter/>
        </div>
    </div>
}