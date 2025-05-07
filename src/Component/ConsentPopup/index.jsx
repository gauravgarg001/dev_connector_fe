import React from 'react'
import { Modal } from 'react-bootstrap'
import { ButtonLoader } from '../../Hooks/pageLoader';
import './style.css'
const Consent = ({image, title, loader, click, close, buttonname}) => {
    return <Modal className='consent-modal-for-app' show={true}>
        <div className='text-center'>
            {<img src={image} width="30px"/>}
            <p className='mt-3'>{title}</p>  
            <div className='d-flex gap-2 justify-content-center align-items-center'>
                <button className='consent-cancel-button' onClick={close}>cancel</button>
                <button className='consent-delete-button' disabled={loader} onClick={click}>{loader && <ButtonLoader/>}{buttonname}</button>
            </div>
        </div>
    </Modal> 
}

export default Consent;