import axios from 'axios'
import { useEffect, useState } from 'react'
import { CartProductsProps } from '../card'
import { CardGrid, CartCardWrapper, ConfirmFooter, ConfirmOrderButton, GridLabels, GridMobile, GridProduct, GridProductBottomLineMobile, GridProductCount, GridProductCountMobile, GridProductCountText, GridProductCountTextMobile, GridProductDeleteItemIcon, GridProductDeleteItemIconMobile, GridProductDeleteItemWrapper, GridProductImage, GridProductImageMobile, GridProductInfo, GridProductInfoWrapperMobile, GridProductItemButton, GridProductItemButtonMobile, GridProductSubtotal, GridProductSubtotalLabelMobile, GridProductSubtotalMobile, GridProductSubtotalPriceMobile, GridProductTopLineMobile, GridProductTopLinePriceMobile, GridProductTopLineTitleMobile, Hr, TotalPrice, TotalText, TotalWrapper } from './style'
import PlusItem from "../../assets/plus-item.svg"
import MinusItem from "../../assets/minus-item.svg"
import DeleteItem from "../../assets/trash-icon.svg"


const CartCards = () => {
    const [cartProducts, setCartProducts] = useState<CartProductsProps[]>([])
    const [total, setTotal] = useState(0);

    useEffect(() => {
        getCartProducts();
        UpdateTotal();
    }, [])

    const getCartProducts = async () => {
        const response = await axios.get('http://localhost:3000/cartProducts')
        setCartProducts(response.data);
        UpdateTotal();
    }

    const UpdateTotal = async () => {
        const response = await axios.get('http://localhost:3000/cartProducts')
        let _total = 0;
        response.data.map((item: CartProductsProps) => {
            _total += item.price * item.count;
        })
        setTotal(_total);
    }

    const AddProduct = async (item: CartProductsProps) => {
        const reponse = await axios.put(`http://localhost:3000/cartProducts/${item.id}`, {
            ...item,
            count: item.count + 1
        })
        getCartProducts();
        UpdateTotal();
    }

    const RemoveProduct = async (item: CartProductsProps) => {
        const response = await axios.get(`http://localhost:3000/cartProducts/${item.id}`);
        if (response.data.count > 0) {
            const reponse = await axios.put(`http://localhost:3000/cartProducts/${item.id}`, {
                ...item,
                count: item.count - 1
            })
        }

        if (response.data.count == 1) {
            const reponse = await axios.delete(`http://localhost:3000/cartProducts/${item.id}`)
        }
        getCartProducts();
        UpdateTotal();
    }

    const RemoveAllProductsById = async (item: CartProductsProps) => {
        const reponse = await axios.delete(`http://localhost:3000/cartProducts/${item.id}`)
        getCartProducts();
        UpdateTotal();
    }

    const ClearCart = async () => {
        cartProducts.map(async (item: CartProductsProps) => {
            const reponse = await axios.delete(`http://localhost:3000/cartProducts/${item.id}`)
        })

        setTimeout(() => {
            getCartProducts();
            UpdateTotal();
        }, 1000);
    }


    return (
        <CartCardWrapper>
            <CardGrid>
                <GridLabels>Produto</GridLabels>
                <GridLabels>QTD</GridLabels>
                <GridLabels>Subtotal</GridLabels>
                <GridLabels></GridLabels>
                {
                    cartProducts.map((item) => {
                        return (
                            <>
                                <GridProduct>
                                    <GridProductImage src={item.image} />
                                    <GridProductInfo>
                                        <span>{item.title}</span>
                                        <span>R$ {item.price.toFixed(2)}</span>
                                    </GridProductInfo>
                                </GridProduct>

                                <GridProductCount>
                                    <GridProductItemButton onClick={() => { RemoveProduct(item) }}>
                                        <img src={MinusItem} alt="" />
                                    </GridProductItemButton>
                                    <GridProductCountText>{item.count}</GridProductCountText>
                                    <GridProductItemButton onClick={() => { AddProduct(item) }}>
                                        <img src={PlusItem} alt="" />
                                    </GridProductItemButton>
                                </GridProductCount>

                                <GridProductSubtotal>R$ {(item.price * item.count).toFixed(2)}</GridProductSubtotal>

                                <GridProductDeleteItemWrapper onClick={() => { RemoveAllProductsById(item) }}>
                                    <GridProductDeleteItemIcon src={DeleteItem} alt="" />
                                </GridProductDeleteItemWrapper>
                            </>
                        )
                    })
                }

            </CardGrid>

            {/* MOBILE */}
            {
                cartProducts.map((item) => {
                    return (
                        <GridMobile>
                            <GridProductImageMobile src={item.image} />

                            <GridProductInfoWrapperMobile>
                                <GridProductTopLineMobile>
                                    <GridProductTopLineTitleMobile>{item.title}</GridProductTopLineTitleMobile>
                                    <GridProductTopLinePriceMobile>R$ {item.price.toFixed(2)}</GridProductTopLinePriceMobile>
                                    <GridProductDeleteItemWrapper onClick={() => { RemoveAllProductsById(item) }}>
                                        <GridProductDeleteItemIconMobile src={DeleteItem} alt="" />
                                    </GridProductDeleteItemWrapper>
                                </GridProductTopLineMobile>

                                <GridProductBottomLineMobile>
                                    <GridProductCountMobile>
                                        <GridProductItemButtonMobile onClick={() => { RemoveProduct(item) }}>
                                            <img src={MinusItem} alt="" />
                                        </GridProductItemButtonMobile>
                                        <GridProductCountTextMobile>{item.count}</GridProductCountTextMobile>
                                        <GridProductItemButtonMobile onClick={() => { AddProduct(item) }}>
                                            <img src={PlusItem} alt="" />
                                        </GridProductItemButtonMobile>
                                    </GridProductCountMobile>

                                    <GridProductSubtotalMobile>
                                        <GridProductSubtotalLabelMobile>
                                            Subtotal
                                        </GridProductSubtotalLabelMobile>
                                        <GridProductSubtotalPriceMobile>
                                            R$ {(item.price * item.count).toFixed(2)}
                                        </GridProductSubtotalPriceMobile>
                                    </GridProductSubtotalMobile>
                                </GridProductBottomLineMobile>

                            </GridProductInfoWrapperMobile>
                        </GridMobile>
                    )
                })
            }
            <Hr />

            <ConfirmFooter>
                <ConfirmOrderButton href="/pedido-finalizado" onClick={() => { ClearCart() }}>Finalizar Pedido</ConfirmOrderButton>
                <TotalWrapper>
                    <TotalText>Total</TotalText>
                    <TotalPrice>R$ {total.toFixed(2)}</TotalPrice>
                </TotalWrapper>
            </ConfirmFooter>
        </CartCardWrapper>
    )
}

export default CartCards