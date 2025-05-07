import React from 'react'
import styled from 'styled-components';

const Div = styled.div`
hegiht: 10vh;
border-bottom: 1px solid #D9DBE9;
background: white;
padding: 10px;
`
export default function PublicHeader(){
    return(
        <Div>
            {/* <img src={Logo} width="130px"/> */}
        </Div>
    );
}