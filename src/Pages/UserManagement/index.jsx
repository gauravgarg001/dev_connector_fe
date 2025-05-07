import React, { useEffect, useState } from 'react'
import './style.css';
import api from '../../Service/api';
import { useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Modal } from 'react-bootstrap';
import axios from 'axios';


export default function UserManagement(){
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);

    const handleGetUser = async () => {
        try{
            const response = await api.get("api/admin/users");
            setData(response.data.data);
        } catch(error){
            console.log(error);
        }
    }

    const handleDelete = async (id) => {
        try{
            let resp = await api.delete(`api/admin/user/${id}`);
            handleGetUser();
        } catch(error){
            console.log(error); 
        }
    }
    useEffect(()=>{
        handleGetUser();
    },[])

    const [formData, setFormData] = useState({
    username: '',
    dob: '',
    gender: '',
    mobile: '',
    email: '',
    adhar: '',
    pan: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    photo: null,
    video: null
    });

    const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: type === 'file' ? files[0] : value,
    }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formdata = new FormData;
        console.log(formData);
        for (let [key, value] of Object.entries(formData)) {
        formdata.append(key, value)
        }

        axios.post("http://localhost:2001/api/auth/register", formdata,{
            headers: {
                "Content-Type": "multipart/form-data" 
            }
        })
        .then((res)=>{
            console.log(res);
            setShow(false);
            handleGetUser();
            setFormData({
                username: '',
                dob: '',
                gender: '',
                mobile: '',
                email: '',
                adhar: '',
                pan: '',
                address: '',
                city: '',
                state: '',
                pincode: '',
                photo: null,
                video: null
            })
        })
        .catch((err)=>{
            console.log(err);
        })
    };


    return(
        <>
            <div className='container-fluid px-0 py-3'>
                <div className='card'>
                    <div className='d-flex justify-content-end'>

                        <button className='submit-button me-2 fw-bold ' onClick={()=>setShow(true)}>Add User</button>
                    </div>
                    <table className='w-100'>
                        <tr className='table-row'>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Gender</th>
                            <th>Registered Date</th>
                            <th>Action</th>
                        </tr>
                        {
                            data?.data?.length === 0 && <tr>No user found</tr>
                        }
                        {
                            data?.data?.map((data, index)=> {
                                return <tr className='table-row'>
                                    <td>{data?.username}</td>
                                    <td>{data?.email}</td>
                                    <td>{data.mobile}</td>
                                    <td>{data.gender}</td>
                                    <td>{new Date(data.createdAt).toLocaleDateString()}</td>
                                    <td className='cp'>
                                        <FaEye className="me-1" onClick={()=>navigate(`/admin/user/${data?._id}`)} />
                                        <MdDelete color='red' onClick={()=>handleDelete(data?._id)}/>
                                    </td>
                                </tr>
                            })
                        }
                    </table>
                </div>
            </div>

            <Modal show={show}>
                <div className='d-flex align-items-center justify-content-between'>
                    <p className='fw-bold fs-5 mb-0'>Add User</p>
                    <p className='cross-button' onClick={()=>setShow(false)}>x</p>
                </div>
                <form onSubmit={handleSubmit} style={{ maxWidth: 600 }}>
                    <div className='d-flex flex-column'>
                        <label className='mt-1'>Username:</label>
                        <input name="username" onChange={handleChange} />
                    </div>
                    <div className='d-flex flex-column'>
                        <label className='mt-1'>Date of Birth:</label>
                        <input type="date" name="dob" onChange={handleChange} />
                    </div>
                    <div className='d-flex flex-column'>
                        <label className='mt-1'>Gender:</label>
                        <select name="gender" onChange={handleChange}>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className='d-flex flex-column'>
                        <label className='mt-1'>Mobile:</label>
                        <input name="mobile" onChange={handleChange} />
                    </div>
                    <div className='d-flex flex-column'>
                        <label className='mt-1'>Email:</label>
                        <input type="email" name="email" onChange={handleChange} />
                    </div>
                    <div className='d-flex flex-column'>
                        <label className='mt-1'>Adhar:</label>
                        <input name="adhar" onChange={handleChange} />
                    </div>
                    <div className='d-flex flex-column'>
                        <label className='mt-1'>PAN:</label>
                        <input name="pan" onChange={handleChange} />
                    </div>
                    <div className='d-flex flex-column'>
                        <label className='mt-1'>Address:</label>
                        <input name="address" onChange={handleChange} />
                    </div>
                    <div className='d-flex flex-column'>
                        <label className='mt-1'>City:</label>
                        <input name="city" onChange={handleChange} />
                    </div>
                    <div className='d-flex flex-column'>
                        <label className='mt-1'>State:</label>
                        <input name="state" onChange={handleChange} />
                    </div>
                    <div className='d-flex flex-column'>
                        <label className='mt-1'>Pincode:</label>
                        <input name="pincode" onChange={handleChange} />
                    </div>
                    <div className='d-flex flex-column'>
                        <label className='mt-1'>Photo:</label>
                        <input type="file" name="photo" accept="image/*" onChange={handleChange} />
                    </div>
                    <div className='d-flex flex-column'>
                        <label className='mt-1'>Video:</label>
                        <input type="file" name="video" accept="video/*" onChange={handleChange} />
                    </div>

                    <button className='mt-2 submit-button w-100' type="submit">Submit</button>
                </form>
            </Modal>
        </>
    );
}