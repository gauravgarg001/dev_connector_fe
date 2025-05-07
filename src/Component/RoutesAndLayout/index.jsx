import React, {lazy} from 'react'
import {Navigate, Routes, Route} from 'react-router-dom'
import Layout from './Layout';
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';
import Register from '../../Pages/Register';

//user
const UserManagement = lazy(()=> import('../../Pages/UserManagement'));
const Dashboard = lazy(()=>import('../../Pages/Dashboard/index'));
const SingleUser = lazy(()=>import('../../Pages/UserManagement/single'));

export default function Routers(){
    const protectedRoute = [
        {
            path: 'dashboard',
            element: <Dashboard/>
        },
        {
            path: 'user-management',
            element: <UserManagement/>
        },
        {
            path: 'user/:id',
            element: <SingleUser/>
        }
    ];

    const token = localStorage.getItem('jwt');
    
    return(
        <Routes>
            <Route path="" element={<Layout/>}>
                <Route path="/admin" element={<ProtectedRoute/>}>
                {
                    protectedRoute?.map((data, index)=>{
                        return <Route key={index} path={data?.path} element={data?.element}/>
                    })
                }
                </Route>
            </Route>
            <Route path="/user" element={<ProtectedRoute/>}>
                <Route path={"register"} element={<Register/>}/>
            </Route>
        </Routes>
    );
}