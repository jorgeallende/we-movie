import styled from "styled-components"

interface IsOnCartProps {
    isOnCart: boolean
}

export const CardWrapper = styled.div`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    border-radius: 4px;    
    font-weight: 700;
    width: min-content;
    padding: 10px 11px;
    align-items: center;
    justify-self: center;
`

export const Cover = styled.img`
    height: 188px;
    width: 147px;
`

export const MovieTitle = styled.span`
    font-size: 12px;
    margin-top: 7px;
`

export const MoviePrice = styled.span`
    font-size: 16px;
    margin-top: 2px;
`

export const AddBtn = styled.button<IsOnCartProps>`
    background-color: ${props => props.isOnCart ? '#039B00' : '#009EDD'};
    color: white;
    padding: 12px 46px;
    height: 40px;
    width: 287px;
    margin-top: 8px;
    border: none;
    text-transform: uppercase;
    font-size; 12px;
    font-weight: 700;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
    white-space: nowrap;
    gap: 12px;
`

export const AddCartCount = styled.span`
    font-size: 12px;
    font-weight: 400;
`

export const AddCartIconWrapper = styled.div`
    display: flex;
    gap: 2px;
`