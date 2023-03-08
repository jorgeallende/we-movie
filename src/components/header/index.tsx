import axios from 'axios'
import { useEffect, useState } from 'react'
import CartIcon from "../../assets/cart-icon.svg"
import { CartWrapper, CartWrapperIcon, CartWrapperInfo, CartWrapperInfoCount, CartWrapperInfoText, Head, Logo } from './style'

export interface CartProductsProps {
    movieId: number,
    id: number,
    count: number
}

const Header = () => {
    const [countSum, setCountSum] = useState<number>(0)

    const getCartProductsSum = async () => {
        const response = await axios.get('http://localhost:3000/cartProducts')
        const countTotal = response.data.reduce((accumulator: number, currentValue: CartProductsProps) => {
            return accumulator + currentValue.count;
        }, 0)
        setCountSum(countTotal)
    }

    useEffect(() => {
        getCartProductsSum();
    }, [])

    return (
        <Head>
            <Logo>WeMovies</Logo>
            <CartWrapper href='/carrinho'>
                <CartWrapperInfo>
                    <CartWrapperInfoText>Meu carrinho</CartWrapperInfoText>
                    <CartWrapperInfoCount>{countSum} itens</CartWrapperInfoCount>
                </CartWrapperInfo>
                <CartWrapperIcon src={CartIcon} alt="" />
            </CartWrapper>
        </Head>
    )
}

export default Header