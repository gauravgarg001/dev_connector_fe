import axios from 'axios';
import React, { useState } from 'react'
import './index.css'
import { toast } from 'react-toastify';
function Register() {

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
            toast.success("User register successfully")
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

    return (
        <div className='d-flex justify-content-center'>
            <div className='card card-1'>
                <form onSubmit={handleSubmit} style={{ maxWidth: 600 }}>
                    <div className='d-flex gap-2 w-100'>
                        <div className='d-flex flex-column w-50'>
                            <label className='mt-1'>Username:</label>
                            <input placeholder='Enter name' name="username" value={formData.username} onChange={handleChange} />
                        </div>
                        <div className='d-flex flex-column w-50'>
                            <label className='mt-1'>Date of Birth:</label>
                            <input placeholder='Enter DOB' type="date" name="dob" value={formData.dob} onChange={handleChange} />
                        </div>
                    </div>
                    <div className='d-flex flex-column'>
                        <label className='mt-1'>Gender:</label>
                        <select name="gender" value={formData.gender} onChange={handleChange}>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className='d-flex flex-column'>
                        <label className='mt-1'>Mobile:</label>
                        <input placeholder='Enter Mobile' name="mobile" value={formData.mobile} onChange={handleChange} />
                    </div>
                    <div className='d-flex flex-column'>
                        <label className='mt-1'>Email:</label>
                        <input placeholder='Enter mail id' type="email" name="email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className='d-flex flex-column'>
                        <label className='mt-1'>Adhar:</label>
                        <input placeholder='Enter adhar number' name="adhar" value={formData.adhar} onChange={handleChange} />
                    </div>
                    <div className='d-flex flex-column'>
                        <label className='mt-1'>PAN:</label>
                        <input placeholder='Enter pan number' name="pan" value={formData.pan} onChange={handleChange} />
                    </div>
                    <div className='d-flex flex-column'>
                        <label className='mt-1'>Address:</label>
                        <input placeholder='Enter Address' name="address" value={formData.address} onChange={handleChange} />
                    </div>
                    <div className='d-flex gap-1'>
                        <div className='d-flex flex-column'>
                            <label className='mt-1'>City:</label>
                            <input placeholder='Enter city' name="city" value={formData.city} onChange={handleChange} />
                        </div>
                        <div className='d-flex flex-column'>
                            <label className='mt-1'>State:</label>
                            <input placeholder='Enter state' name="state" value={formData.state} onChange={handleChange} />
                        </div>
                        <div className='d-flex flex-column'>
                            <label className='mt-1'>Pincode:</label>
                            <input placeholder='Enter pincode' name="pincode" value={formData.pincode} onChange={handleChange} />
                        </div>
                    </div>
                    <div className='d-flex gap-2 w-100'>
                        <div className='d-flex flex-column w-50'>
                            <label className='mt-1'>Photo:</label>
                            <input type="file" name="photo" accept="image/*" value={formData.photo} onChange={handleChange} />
                        </div>
                        <div className='d-flex flex-column w-50'>
                            <label className='mt-1'>Video:</label>
                            <input type="file" name="video" accept="video/*" value={formData.video} onChange={handleChange} />
                        </div>
                    </div>

                    <button className='mt-2 submit-button w-100' type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Register;