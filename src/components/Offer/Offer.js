import React, { useState } from 'react';
import { OfferButton, OfferText, OfferTitle, OfferWrapper } from './OfferStyles';
import Modal from '../Modal/Modal';
import shop from '../../images/shop.jpg'

const Offer = () => {
    const [showModal, setShowModal ] = useState(false);

    const handleOpenModal = () => {
        setShowModal(prev => !prev);
    }
    
    return (
        <OfferWrapper>
            <OfferTitle>Skorzystaj z oferty</OfferTitle>
            <OfferText>Odzwiedź nasz salon i sprawdź, co zyskujesz</OfferText>
            <OfferButton onClick = { handleOpenModal } >znajdź salon</OfferButton>
            <Modal showModal = {showModal} setShowModal = {setShowModal} text = 'tu powinieneś znaleźć swój ulubiony sklep' url = {shop} />
        </OfferWrapper>
    )
};

export default Offer;
