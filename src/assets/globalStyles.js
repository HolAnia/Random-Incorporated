import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    cursor: none;
}
`;

export const AppContainer = styled.main`
    background-color: ${({theme}) => theme.colors.footer2bg};
    margin: 0 auto;
`;

export const AppWrapper = styled.div`
    margin: 0 auto;

    @media ${({ theme }) => theme.media.small} {
        min-width: 320px;

    }
    @media ${({ theme }) => theme.media.xxxl} {
        width: 1400px;
    }
`;