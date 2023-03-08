import styled from "styled-components";

export const CartCardWrapper = styled.div`
    background-color: #fff;
    border-radius: 4px;
    padding: 24px;
    margin-top: 24px;
`

export const CardGrid = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;  
    gap: 21px;
`

export const GridLabels = styled.span`
    text-transform: uppercase;
    color: #999999;
    font-size: 14px;
    font-weight: 700;

    @media (max-width: 768px) {
        display: none;
    }
`

export const GridMobile = styled.div`
    display: flex;
    gap: 16px;
    margin-bottom: 24px;

    @media (min-width: 769px) {
        display: none;
    }
`

export const GridProduct = styled.div`
    display: flex;
    align-items: center;
    gap: 52px;

    @media (max-width: 768px) {
        display: none
    }
`

export const GridProductItemButtonMobile = styled.button`
    cursor: pointer;
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
`

export const GridProductTopLineMobile = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-size: 16px;
    font-weight: 700;
    color: #2F2E41;
`

export const GridProductBottomLineMobile = styled.div`
    display: flex;
    justify-content: space-between;
`

export const GridProductTopLinePriceMobile = styled.span`
    white-space: nowrap;
`

export const GridProductImage = styled.img`
    width: 89px;
    height: 114px;

    @media (max-width: 768px) {
        display: none
    }
`

export const GridProductImageMobile = styled.img`
    width: 64px;
    height: 82px;
`

export const GridProductInfo = styled.div`
    font-size: 14px;
    font-weight: 700;
    color: #2F2E41;
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (max-width: 768px) {
        display: none
    }
`

export const GridProductInfoWrapperMobile = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 16px;
`

export const GridProductCount = styled.div`
    display: flex;
    align-items: center;
    gap: 11px;

    @media (max-width: 768px) {
        display: none
    }
`

export const GridProductCountMobile = styled.div`
    display: flex;
    align-items: center;
    gap: 11px;
`

export const GridProductCountText = styled.span`
    border: 1px solid #D9D9D9;
    padding-left: 16px;
    width: 62px;
    height: 26px;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    display: flex;
    align-items: center;
    border-radius: 4px;

    @media (max-width: 768px) {
        display: none
    }
`

export const GridProductCountTextMobile = styled.span`
    border: 1px solid #D9D9D9;
    padding-left: 12px;
    width: 36px;
    height: 26px;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    display: flex;
    align-items: center;
    border-radius: 4px;
`

export const GridProductItemButton = styled.button`
    cursor: pointer;
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        display: none
    }
`

export const GridProductSubtotal = styled.span`
    font-size: 16px;
    font-weight: 700;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        display: none
    }
`

export const GridProductSubtotalMobile = styled.span`
    display: flex;
    flex-direction: column;
`

export const GridProductSubtotalLabelMobile = styled.span`
    text-transform: uppercase;
    color: #999999;
    font-size: 14px;
    font-weight: 700;
`

export const GridProductSubtotalPriceMobile = styled.span`
    font-size: 14px;
    font-weight: 700;
    color: #2F2E41;
`

export const GridProductDeleteItemWrapper = styled.button`
    justify-self: flex-end;
    border: none;
    width: min-content;
    background-color: transparent;
`

export const GridProductDeleteItemIcon = styled.img`
    cursor: pointer;

    @media (max-width: 768px) {
        display: none
    }
`

export const GridProductTopLineTitleMobile = styled.span`
    font-size: 14px;
`

export const GridProductDeleteItemIconMobile = styled.img`
    width: 16px;
    height: 18px;
`

export const Hr = styled.hr`
    color: #999999;
    margin: 21px 0;
`

export const ConfirmOrderButton = styled.a`
    background-color: #009EDD;
    color: white;
    padding: 12px 46px;

    margin-top: 8px;
    border: none;
    text-transform: uppercase;
    font-size; 12px;
    font-weight: 700;
    border-radius: 4px;
    cursor: pointer;
    white-space: nowrap;
    text-decoration: none;
    text-align: center;
`

export const ConfirmFooter = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }
`

export const TotalWrapper = styled.div`
    display: flex;
    gap: 24px;
    align-items: center;

    @media (max-width: 768px) {
        justify-content: flex-end;
        margin-bottom: 16px;
    }
`

export const TotalText = styled.span`
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: #999999;
    text-transform: uppercase;
`

export const TotalPrice = styled.span`
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    color: #2F2E41;
`