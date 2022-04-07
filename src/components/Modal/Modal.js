import React, { useRef } from 'react';
import { Background, ModalWrapper, Image } from './ModalStyles';
import { useSpring, animated } from 'react-spring';

const Modal = ({ showModal, setShowModal, text, url }) => {

    const modalRef = useRef();

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    })

    const closeModal = (e) => {
        if(modalRef.current === e.target) {
            setShowModal(false);
        }
    }

    return(
        <>
            {
                showModal ? (
                    <Background ref = { modalRef } onClick = { closeModal }>
                        <animated.div style = { animation }>
                            <ModalWrapper>
                                <h3>{text}</h3>
                                <Image url = {url} />
                            </ModalWrapper>
                        </animated.div>
                    </Background>
                ) : null
            }
       
        </>
    )
};

export default Modal;
