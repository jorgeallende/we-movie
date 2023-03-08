import axios from "axios"
import { useEffect, useState } from "react"
import Header, { CartProductsProps } from "../../components/header"
import EmptyCard from "../../components/emptyCart"
import CartCards from "../../components/cartCards"
import Loader from "../../components/loading"

const Carrinho = () => {
    const [countSum, setCountSum] = useState<number>(0)
    const [loading, setLoading] = useState(true)

    const getCartProducts = async () => {
        setLoading(true)
        const response = await axios.get('http://localhost:3000/cartProducts')
        const countTotal = response.data.reduce((accumulator: number, currentValue: CartProductsProps) => {
            return accumulator + currentValue.count;
        }, 0)
        setCountSum(countTotal)
        setLoading(false)
    }

    useEffect(() => {
        getCartProducts();
    }, [])


    return (
        <div>
            <Header />
            {
                loading ?
                    <Loader /> :
                    countSum > 0 ?
                        <CartCards /> :
                        <EmptyCard />
            }
        </div>
    )
}

export default Carrinho 