import React from 'react';
import PublicHeader from '../Navbar/PublicHeader';
import PublicFooter from '../Footer/PublicFooter';
import { Outlet } from 'react-router-dom';
export default function PublicRoute(){
    return <>
        <PublicHeader/>
        <Outlet/>
        <PublicFooter/>
    </>
}