import React, { useState } from 'react';
import { ShopMainText, ShopSmallText, ShopWrapper, ShopButton } from './ShopStyles';
import { changeColor, backColor } from '../../assets/cursorColor';
import Modal from '../Modal/Modal';
import cart from '../../images/cart.png'

const Shop = () => {

    const [showModal, setShowModal ] = useState(false);

    const handleOpenModal = () => {
        setShowModal(prev => !prev);
    }

    return (
        <ShopWrapper>
            <ShopSmallText>Sprawdź najnowszą, sierpniową ofertę <span>random</span>.</ShopSmallText>
            <ShopMainText>Kup produkty zawierające dowolny system <span>rgb</span> lub <span>cmyk</span> i&nbsp;zyskaj dodatkowy rabat na zamówienie.</ShopMainText>
            <ShopButton onMouseEnter = { changeColor } onMouseLeave = { backColor } onClick = { handleOpenModal }>idź do sklepu</ShopButton>
            <Modal showModal = { showModal } setShowModal = { setShowModal } text = "Jesteś w swoim ulubionym sklepie! Co&nbsp;kupisz?" url = { cart } />
        </ShopWrapper>
    )
};

export default Shop;
