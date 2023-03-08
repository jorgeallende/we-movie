import { useEffect, useState } from 'react'
import AddCartIcon from '../../assets/add-cart-icon.svg'
import { CardWrapper, Cover, MovieTitle, MoviePrice, AddBtn, AddCartIconWrapper, AddCartCount } from './style'
import axios from 'axios'

export interface ProductProps {
    id: number,
    title: string,
    price: number,
    image: string,
    count: number
}

export interface CartProductsProps {
    movieId: number,
    id: number,
    count: number,
    title: string,
    price: number,
    image: string,
}

const Card = (props: ProductProps) => {
    const [, setCartProducts] = useState<number[]>([])
    const [isOnCart, setIsOnCart] = useState<boolean>(false)
    const [thisProduct, setThisProduct] = useState<CartProductsProps>({} as CartProductsProps)

    useEffect(() => {
        getCartProducts();
    }, [])


    const addProduct = async (product: ProductProps) => {
        if (thisProduct.id) {
            await axios.put(`http://localhost:3000/cartProducts/${thisProduct.id}`, { ...props, movieId: thisProduct.movieId, count: thisProduct.count + 1 })
        } else {
            await axios.post('http://localhost:3000/cartProducts',
                { title: product.title, image: product.image, price: product.price, movieId: product.id, count: 1 })
        }

        getCartProducts();
    }

    const getCartProducts = async () => {
        const response = await axios.get('http://localhost:3000/cartProducts')
        setCartProducts(response.data);
        response.data.map((product: CartProductsProps) => {
            if (product.movieId === props.id) {
                setIsOnCart(true)
                setThisProduct(product)
            }
        })
    }

    return (
        <CardWrapper>
            <Cover src={props.image} alt="" />
            <MovieTitle>{props.title}</MovieTitle>
            <MoviePrice>R$ {props.price.toFixed(2)}</MoviePrice>
            <AddBtn isOnCart={isOnCart} onClick={() => { addProduct(props) }}>
                <AddCartIconWrapper>
                    <img src={AddCartIcon} alt="" />
                    <AddCartCount>{thisProduct.count ? thisProduct.count : 0}</AddCartCount>
                </AddCartIconWrapper>
                {isOnCart ? 'Item Adicionado' : 'Adicionar ao Carrinho'}
            </AddBtn>
        </CardWrapper>
    )
}

export default Card