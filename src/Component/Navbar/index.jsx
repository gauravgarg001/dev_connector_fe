import React from 'react'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaUserCircle } from "react-icons/fa";

const Div = styled.div`
hegiht: 10vh;
border-bottom: 1px solid #D9DBE9;
background: white;
display: flex;
justify-content: end;
align-items: center;
padding: 10px;

.heading{
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 0px;
    line-height: 13px;
}

.sub-heading{
    font-size: 13px;
    font-weight: 500;
    color: #A9A9A9;
}
`

export default function Navbar(){
    const location = useLocation();
        
    return(
        <Div>
            <div className='d-flex align-items-center justify-content-end gap-2'>
                {/* <img src={Notification}/>
                <img src={Image}/> */}
                <FaUserCircle size={30}/>
            </div>
        </Div>
    );
}