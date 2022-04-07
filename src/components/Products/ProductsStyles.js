import styled from 'styled-components';

export const ProductsWrapper = styled.div`
    height: 50vh;
    padding-top: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.lightGrey };
    align-items: center;
`;

export const ProductText = styled.p`
    font-size: 26px;
    color: ${({ theme }) => theme.colors.text };

    span {
        text-transform: uppercase;
        font-weight: ${({ theme }) => theme.weight.bold };
    }

    @media ${({ theme }) => theme.media.small } {
        width: 350px;
        text-align: center;
    }
`;

export const ProductFoto = styled.div`
    width: 713px;
    height: 281px;
    background-image: ${ ({ url }) => `url('${ url }')`};

    @media ${({ theme }) => theme.media.small } {
        width: 320px;
        background-size: contain;
        background-repeat: no-repeat;
        height: 126px;
    }
`;
