import React from 'react'
import styled from 'styled-components';

const Div = styled.div`
border-top: 1px solid #D9DBE9;
background: white;
display: flex;
height: 5vh;
justify-content: center;
align-items: center;
`
const P = styled.p`
font-size: 16px;
font-weight: 500;
color: #333333;
`
export default function PublicFooter(){
    return <Div>
        <P className='mb-0'>All Rights Reserved @2024</P>
    </Div>
}