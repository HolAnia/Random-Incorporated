import styled from 'styled-components';

export const ShopWrapper = styled.div`
    height: 500px;
    background-color: ${({ theme }) => theme.colors.gray };
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media ${({ theme }) => theme.media.small } {
        height: 80vh;
    }
`;

export const ShopButton = styled.div`
    width: 240px;
    height: 60px;
    background-color: ${({ theme }) => theme.colors.black };
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white };
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: ${({ theme }) => theme.weight.bold };
    font-family: ${({ theme}) => theme.font.arial };
    font-size: 12px;
    margin-top: 85px;

    &:hover {
        background-color: ${({ theme }) => theme.colors.white };
        color: ${({ theme }) => theme.colors.black };
        border: 2px solid ${({ theme }) => theme.colors.black };

    }
`;

export const ShopMainText = styled.h3`
    font-size: 24px;
    line-height: 38px;
    color: ${({ theme }) => theme.colors.text };
    width: 54%;
    text-align: center;
    font-weight: ${({ theme }) => theme.weight.regular };
    position: relative;

    &::after {
        position: absolute;
        content: '';
        height: 1px;
        width: 369px;
        background-color: ${({ theme }) => theme.colors.text };
        bottom: 0;
        right: 19%;
    }

    span {
        text-transform: uppercase;
    }

    @media ${({ theme }) => theme.media.small } {
        font-size: 20px;
        width: 80%;

        &::after {
            width: 200px;
        }
    }

    @media ${({ theme }) => theme.media.large} {
        &::after {
            right: 10%;
        }
    }

    @media ${({ theme }) => theme.media.xxxl} {
        &::after {
            right: 19%;
        }
    }
`;

export const ShopSmallText = styled.p`
    font-size: 14px;
    font-family: ${({ theme }) => theme.font.arial };
    font-weight: ${({ theme })=> theme.weight.bold };
    margin-bottom: 30px;

    span {
        text-transform: uppercase;
    }
`;
