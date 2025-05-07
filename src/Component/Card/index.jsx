import React from 'react'
import styled from 'styled-components';
import { image } from '../../Utils/images';
import { NumberFormatter } from '../../Utils/HelperFunction';

const Card = styled.div`
    border: none;
    border-radius: 16px;
    background: white;
    width: ${(props)=>props?.width};

    .up-down{
        font-size: 13.5px;
        font-weight: 500;
        line-height: 17.07px;
        text-align: left;
    }

    .title{
        color: #666666;
        font-size: 13px;
        font-weight: 400;
        line-height: 19px;
    }

    .value{
        font-size: 18px;
        font-weight: 600;
        line-height: 22px;
        color: #333333;
        letter-spacing: 0.016em;
    }

    .percent{
        color: ${props => props.trend ? "#1C7947" : "#D22B2B"};
        font-weight: 600;
    }

    .secondary{
        color: #A9A9A9;
    }
`
const Card1 = styled.div`
    background: white;
    border: none;
    border-radius: 16px;
    width: ${(props)=>props?.width};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;

    .title{
        font-size: 15px;
        font-weight: 400;
        color: #666666;
        line-height: 19.5px;
    }

    .total{
        font-size: 18px;
        font-weight: 600;
        color: #333333;
    }
`
export default function Cards({width, data, key}){
    
    return ( <Card width={width} key={key} trend={data?.status === "up" ? true : false} className=' mt-2 p-3 card'>
            <div className="d-flex justify-content-between align-items-end">
                <div>
                    <p className="title mb-2">{data?.title}</p>
                    <p className="value mb-1">{NumberFormatter(Number(data?.num)) || 0}</p>
                </div>
                <div>
                    <p className='mb-2'>{data?.image}</p>
                </div>
            </div>
            <div className="d-flex gap-1 up-down align-items-center">
                {
                    data?.status === "up" ? 
                    <img alt="" src={image?.dashboard?.Up}/> : <img alt="" src={image?.dashboard?.Down}/>
                }
                <span className='percent'>{data?.percent}%</span>
                <span className="secondary">from last month</span>
            </div>
        </Card> 
    );
}

export const CardsOne = ({data}) => {
    return ( <Card1>  
        <div>
            <p className='mb-0 title'>Total {data?.title}</p>
            <p className='total mb-0'>{NumberFormatter(Number(data?.total)) || 0}</p>
        </div>
        <div>{data?.image}</div>
    </Card1> );
}