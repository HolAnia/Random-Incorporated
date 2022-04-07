import styled from 'styled-components';

export const RealizationsWrapper = styled.div`
    height: 575px;
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme.colors.lightGrey};
    align-items: center;
    justify-content: space-between;

    @media ${({ theme }) => theme.media.small} {
        height: inherit;
    }

`;

export const RealizationMainText = styled.h3`
    color: ${({theme}) => theme.colors.text};
    font-weight: ${({theme}) => theme.weight.regular};
    font-size: 32px;
    margin-top: 55px;

    span {
        font-weight: ${({theme}) => theme.weight.bold};
        font-family: ${({theme}) => theme.font.arial};
    }

    @media ${({ theme }) => theme.media.small} {
        text-align: center;
        font-size: 25px;
    }
`;

export const RealizationText = styled.p`
    font-size: 19px;
    line-height: 28px;
    text-align: center;
    width: 70%;

    span {
        text-transition: uppercase;
    }

    @media ${({ theme }) => theme.media.small} {
        font-size: 16px;
        margin: 20px 0;
    }
`;

export const ExamplesWrapper = styled.div`
    display: flex;
    width: 100%;

    @media ${({ theme }) => theme.media.small} {
        flex-wrap: wrap;
        justify-content: center;
    }
`;

export const ExampleCard = styled.div`
    background-image: ${ ({ url }) => `url('${ url }')`};
    background-size: cover;
    width: 25%;
    height: 342px;
    position: relative;

    &::after {
        width: 100%;
        height: 100%;
        position: absolute;
        content: '+';
        color: ${({ theme }) => theme.colors.white };
        font-size: 150px;
        font-weight: 100;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.7);
        display: none;
    }

    &:hover::after {
        display: flex;
    }

    @media ${({ theme }) => theme.media.small } {
        width: 80%;
        margin: 10px 0;
        background-position: center;
    }
`