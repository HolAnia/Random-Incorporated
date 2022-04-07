import React from 'react';
import { FooterBottom, FooterSocial, FooterSocialWrapper, FooterText, FooterTop, FooterWrapper } from './FooterStyles';
import fb from '../../images/facebook.svg';
import inst from '../../images/instagram.svg';
import linkin from '../../images/linkedin.svg';
import { changeColor, backColor } from '../../assets/cursorColor';

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterTop onMouseEnter = {changeColor} onMouseLeave = {backColor}>
                <FooterText>Obserwuj nas i bądź na bieżąco ze wszystkimi ofertami.</FooterText>
                <FooterSocialWrapper>
                    <FooterSocial url = {fb} />
                    <FooterSocial url = {inst} />
                    <FooterSocial url = {linkin} />
                </FooterSocialWrapper>
            </FooterTop>
            <FooterBottom>
                &copy;2021
            </FooterBottom>
        </FooterWrapper>
    )
};

export default Footer;
