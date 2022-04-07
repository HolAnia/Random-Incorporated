import styled from 'styled-components';

export const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center
`;

export const ModalWrapper = styled.div`
    position: relative;
    z-index: 50;
    background-color: ${({ theme }) => theme.colors.footer2bg };
    width: 400px;
    height: 400px;
    color: ${({ theme }) => theme.colors.text };
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;

    @media ${({theme}) => theme.media.small } {
        width: 300px;
    }
`;

export const Image = styled.div`
    width: 150px;
    height: 100px;
    background-image: ${ ({ url })=>`url('${ url }')` };
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin-top: 50px;
`;