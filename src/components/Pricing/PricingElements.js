import styled from 'styled-components'
import {Container} from '../../globalStyles'

export const Pricings = styled.section`
    max-width:2100px;
    width:100%;
    background-color:#101522;

    ${Container}
`

export const PricingHeader = styled.h1`
    font-size:64px;
    text-align:center;
    color:#fff;

    @media screen and (max-width:420px){
        font-size:34px;
    }
`

export const PricingWrapper = styled.div`
    


`

export const CenterItems = styled.div`
    display:flex;
    justify-content:space-between;
    @media screen and (max-width:820px){
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
`

export const PricingCard = styled.div`
    max-width:450px;
    width:320px;
    background-color:#fff;
    box-shadow:0 2px 3px  4px rgba(0,0,0,0.2);
    text-align:center;
    border-radius:3px;
    margin-bottom:20px;
    transition: 0.2s ease-in-out;

    &:hover{
        transform:scale(1.1);
    }
`

export const Icon = styled.i`
    margin:10px 0 0 0;
    font-size:60px;
    color:#333;
`
export const Break = styled.div`
    margin:20px;
`

export const CardHeading = styled.h1`
    font-size:44px;
    color:#333;
`
export const Price = styled.h1`
    font-size:64px;
    color:#333;
`

export const Month = styled.p`
    font-size:16px;
    color:#333;
`
export const DescriptionWrapper = styled.div`
    margin:10px 0 0 0;
    display:flex;
    flex-direction:column;
    
`

export const Description = styled.p`
    font-size:16px;
    color:#333;
`
