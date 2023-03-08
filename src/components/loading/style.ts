import styled, { keyframes } from "styled-components"

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