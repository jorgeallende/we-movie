import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from '../card'
import Loader from '../loading'
import { CardsWrapper } from './style'

interface ProductProps {
    id: number,
    title: string,
    price: number,
    image: string,
    count: number
}

const Cards = () => {

    const [products, setProducts] = useState<ProductProps[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async () => {
        setLoading(true)

        const response = await axios.get('http://localhost:3000/products')
        setProducts(response.data)

        setTimeout(() => {
            setLoading(false)
        }, 1500)

    }

    return (
        <>
            {
                loading ?
                    <Loader />
                    :

                    <CardsWrapper>
                        {
                            products.map((product) => {
                                return (
                                    <Card
                                        key={product.id}
                                        id={product.id}
                                        title={product.title}
                                        price={product.price}
                                        image={product.image}
                                        count={product.count ? product.count : 0}
                                    />
                                )
                            })
                        }
                    </CardsWrapper>
            }
        </>
    )
}

export default Cards