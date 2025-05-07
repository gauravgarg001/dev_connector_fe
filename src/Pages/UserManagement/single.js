import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import api from '../../Service/api';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

import './style.css'
import { Modal } from 'react-bootstrap';

function Single() {
    const {id} = useParams();
    const navigate = useNavigate();

    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [link, setLink] = useState({name: '', data: ''});
    const [selected, setSelected] = useState("username");
    const [value, setValue] = useState("");

    const handleShow=(name, data)=>{
        setShow1(true);
        setLink({name, data});
    }

    const handleClose=(data)=>{
        setShow1(false);
        setLink({name: '', data: ''});
    }

    const handleGetUser = async () => {
        try{
            const response = await api.get(`api/admin/user/${id}`);
            setData(response.data);
        } catch(error){
            console.log(error);
        }
    }

    const handleSubmit = async () =>{
        const data = {};
        data[selected] = value;

        try{
            const resp = await api.patch(`api/admin/user/${id}`, data);
            handleGetUser()
            setShow(false)
        } catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        handleGetUser();
    },[])

    return (
        <div className='card'>
            <div className='d-flex justify-content-between align-items-center mb-2'>
                <FaLongArrowAltLeft onClick={()=>navigate(-1)}/>
                <div onClick={()=>setShow(true)}>
                    <FaPencil/> edit
                </div>
            </div>
            <div className='d-flex mb-2 align-items-center gap-3'> 
                <p className='fw-bold mb-0'>Name: </p> <small className=''>{data.username}</small>
            </div>
            <div className='d-flex mb-2 align-items-center gap-3'> 
                <p className='fw-bold mb-0'>Date of Birth: </p> <small className=''>{data.dob}</small>
            </div>
            <div className='d-flex mb-2 align-items-center gap-3'> 
                <p className='fw-bold mb-0'>Email ID: </p> <small className=''>{data.email}</small>
            </div>
            <div className='d-flex mb-2 align-items-center gap-3'> 
                <p className='fw-bold mb-0'>Mobile Number: </p> <small className=''>{data.mobile}</small>
            </div>
            <div className='d-flex mb-2 align-items-center gap-3'> 
                <p className='fw-bold mb-0'>Gender: </p> <small className=''>{data.gender}</small>
            </div>
            <div className='d-flex mb-2 align-items-center gap-3'> 
                <p className='fw-bold mb-0'>Adhar Number: </p> <small className=''>{data.adhar}</small>
            </div>
            <div className='d-flex mb-2 align-items-center gap-3'> 
                <p className='fw-bold mb-0'>Pan Number: </p> <small className=''>{data.pan}</small>
            </div>
            <div className='d-flex mb-2 align-items-center gap-3'> 
                <p className='fw-bold mb-0'>Address: </p> <small className=''>{`${data.address} ${data.city} ${data.state}, ${data.pincode}`}</small>
            </div>
            <div className='d-flex mb-2 align-items-center gap-3'> 
                <p className='fw-bold mb-0'>Registered On: </p> <small className=''>{new Date(data.createdAt).toLocaleDateString()}</small>
            </div>
            <div className='d-flex mb-2 align-items-center gap-3'> 
                <p className='fw-bold mb-0'>Photo ID: </p> <small onClick={()=>handleShow('photo', data.photo)}>preview</small>
            </div>
            <div className='d-flex mb-2 align-items-center gap-3'> 
                <p className='fw-bold mb-0'>Video: </p> <small onClick={()=>handleShow('video',data.video)}>preview</small>
            </div>

            <Modal show={show}>
                <div className='d-flex justify-content-between align-items-center'>
                    <p className='fw-bold fs-5'>Update</p>
                    <p onClick={()=>setShow(false)} className='cross-button'>x</p>
                </div>

                <div className='d-flex flex-column'>
                    <label>Field</label>
                    <select value={selected} onChange={(e) =>setSelected(e.target.value)}>
                        <option value="username">Name</option>
                        <option value="dob">Date of Birth</option>
                        <option value="email">Email</option>
                        <option value="gender">Gender</option>
                        <option value="mobile">Mobile Number</option>
                        <option value="adhar">Adhar Number</option>
                        <option value="pan">Pan Number</option>
                        <option value="address">Address</option>
                        <option value="city">City</option>
                        <option value="state">State</option>
                        <option value="pincode">Pincode</option>
                    </select>

                    <label className='mt-3'>Value</label>
                    <input
                        value={value}
                        onChange={(e)=>setValue(e.target.value)}
                    />
                </div>
                <button onClick={()=>handleSubmit()} className='submit-button mt-2'>
                    Update
                </button>
            </Modal>

            <Modal show={show1} onHide={handleClose}>
          
                {link && link.name === "photo" ? <img src={link.data} /> :
                <video controls>
                    <source src={link.data} type='video/mp4' />
                </video>}
            </Modal>
        </div>
    )
}

export default Single;