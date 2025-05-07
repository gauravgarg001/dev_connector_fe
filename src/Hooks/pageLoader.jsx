import React from 'react'
import { Oval } from 'react-loader-spinner';
export default function PageLoader(){
    return(
        <div className='d-flex justify-content-center'>
            <Oval 
                color='#D22B2B'
                secondaryColor='rgb(203 33 33 / 64%)'
                strokeWidth={4}
            />
        </div>
    );
}

export const ButtonLoader = () => {
    return <Oval 
                height={20} 
                width={30} 
                secondaryColor='rgb(245, 245, 245)' 
                strokeWidth={5} 
                color="white"
            />
}