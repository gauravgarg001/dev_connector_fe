import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
export default function ProtectedRoute(){
    return <Outlet/>
}