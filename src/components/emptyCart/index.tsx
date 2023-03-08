import React from 'react'
import { NoItemBox, NoItemText, NoItemVector, GoBackBtn } from './style'
import NoItemImage from "../../assets/no-items.svg"

const EmptyCard = () => {
    return (
        <NoItemBox>
            <NoItemText>
                {`Parece que não há nada por aqui :(`}
            </NoItemText>
            <NoItemVector src={NoItemImage} />
            <GoBackBtn href="/">Voltar</GoBackBtn>
        </NoItemBox>
    )
}

export default EmptyCard