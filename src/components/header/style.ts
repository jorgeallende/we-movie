import styled from "styled-components"

export const Head = styled.div`
color: white;
display: flex;
justify-content: space-between;
align-items: center;
`

export const Logo = styled.h1`
font-size: 20px;
font-weight: 700;
`

export const CartWrapper = styled.a`
display: flex;
gap: 8px;
cursor: pointer;
text-decoration: none;
color: #fff;
`

export const CartWrapperInfo = styled.div`
display: flex;
flex-direction: column;
font-size: 12px;
font-weight: 600;
text-align: right;
`

export const CartWrapperInfoText = styled.span``

export const CartWrapperInfoCount = styled.span`
color: #999999;
`

export const CartWrapperIcon = styled.img`
height: 32px;
`