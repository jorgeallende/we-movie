import { OrderConfirmBox, OrderConfirmText, OrderConfirmVector, GoBackBtn } from './style'
import OrderConfirmImage from "../../assets/confirm-order.svg"
import Header from '../../components/header'

const CompraFinalizada = () => {
    return (
        <>
            <Header />
            <OrderConfirmBox>
                <OrderConfirmText>
                    Compra realizada com sucesso!
                </OrderConfirmText>
                <OrderConfirmVector src={OrderConfirmImage} />
                <GoBackBtn href="/">Voltar</GoBackBtn>
            </OrderConfirmBox>
        </>
    )
}

export default CompraFinalizada