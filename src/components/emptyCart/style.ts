import styled from "styled-components"

export const NoItemBox = styled.div`
        width: 100%;
        background-color: #fff;
        border-radius: 4px;
        margin-top: 24px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 32px;
        padding: 64px 0;
    `

export const NoItemText = styled.span`
        font-size: 20px;
        font-weight: 700;
        padding: 0 24px;
        text-align: center;
    `

export const NoItemVector = styled.img`
        height: 265px;

        @media (max-width: 768px) {
            width: 100%;
            height: auto;
        }
    `

export const GoBackBtn = styled.a`
        background-color: #009EDD;
        text-transform: uppercase;
        color: #fff;
        font-size: 14px;
        font-weight: 700;
        padding: 11px 60px;
        border-radius: 4px;
        border: none;
        cursor: pointer;
        text-decoration: none;
    `