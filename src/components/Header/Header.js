import React, { useEffect } from 'react';
import { Banner, Logo, Title, TitleWrapper, Subtitle } from './HeaderStyles';
import image from '../../images/photo.png';
import logo from '../../images/Logo.svg';
import { AppWrapper } from '../../assets/globalStyles';

const Header = () => {

    useEffect(() => {
        
        window.addEventListener('mousemove', (e) => {
            document.querySelectorAll('.paralax').forEach(element => {
                const speed = element.getAttribute('data-speed');
                const x = (window.innerWidth - e.pageX * speed) / 190;
                const y = (window.innerHeight - e.pageY * speed) / 190;
                element.style.transform = `translateX(${x}px) translateY(${y}px)`;
            }) 
        })

    }, [])

    return(
        <AppWrapper>
            <Banner url = { image }>
                <Logo url = { logo } data-speed = '-15' className = "paralax" />
                <TitleWrapper>
                    <Title data-speed = '-6' className = "paralax">Lorem ipsum</Title>
                    <Subtitle data-speed = '-6' className = "paralax" >dolor set ignify</Subtitle>
                </TitleWrapper>   
            </Banner>
        </AppWrapper>
    )
};

export default Header;
