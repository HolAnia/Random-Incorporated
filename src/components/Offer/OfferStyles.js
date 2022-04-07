import styled from 'styled-components';

export const OfferWrapper = styled.div`
    height: 360px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.black };
    color: ${({ theme }) => theme.colors.white };

    @media ${({ theme }) => theme.media.small } {
        height: 60vh;
    }
`;

export const OfferTitle = styled.h2`
    font-family: ${({theme}) => theme.font.arial};
    font-size: 36px;
    margin-bottom: 15px;

    @media ${({ theme }) => theme.media.small } {
        font-size: 32px;
    }
`;

export const OfferText = styled.p`
    font-size: 24px;
    margin-bottom: 60px;
    font-weight: ${({ theme }) => theme.weight.regular };

    @media ${({ theme }) => theme.media.small } {
        font-size: 20px;
        text-align: center;
    }
`;

export const OfferButton = styled.div`
    width: 240px;
    height: 60px;
    display:flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.black };
    background-color: ${({ theme }) => theme.colors.white };
    text-transform: uppercase;
    font-size: 12px;
    font-weight: ${({ theme }) => theme.weight.bold };
    font-family: ${({ theme }) => theme.font.arial };

    &:hover {
        background-color: ${({ theme }) => theme.colors.black };
        color: ${({ theme })=>theme.colors.white };
        border: 2px solid ${({ theme }) => theme.colors.white };

    }
`;
