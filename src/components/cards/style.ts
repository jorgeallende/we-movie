import styled, { keyframes } from "styled-components";
import { device } from "../../utils/breakpoints";

export const CardsWrapper = styled.div`
    display: inline-grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;
    margin-top: 24px;
    width: 100%;

    @media ${device.laptop} { 
        grid-template-columns: repeat(3, 1fr);
      }
`

export const LoadingWrapper = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoadingAnimation = keyframes`
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
`

export const LoadingImage = styled.img`
    animation: ${LoadingAnimation} 1s linear infinite;
`