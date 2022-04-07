import styled from 'styled-components';

export const Banner = styled.div`
    width: 100%;
    padding: 50px 90px 120px;
    height: 600px;
    background-image: ${ ({ url })=>`url('${ url }')` };
    background-size: cover;
    background-position: 0 center;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &::after {
        position: absolute;
        top: 0;
        left: 0;
        content: '';
        width: 100%;
        height: 100%;
        background: linear-gradient( rgba(41, 41, 41, 0.76) 0%, rgba(41, 41, 41, 0) 100%);
        transform: rotate(-180deg);
        opacity: 0.2;
    }

    @media ${({ theme }) => theme.media.small} {
        background-position: -225px;
        height: 100vh;
        padding: 50px 0 50px 20px;
        justify-content: space-around;

    }
`;

export const Logo = styled.div`
    background-image: ${ ({ url }) => `url('${ url }')`};
    width: 340px;
    height: 150px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 0 center;
    background-color: rgba(0, 0, 0, 0);
`;

export const Title = styled.h1`
    color: ${({theme}) => theme.colors.white};
    font-family: ${({theme})=> theme.font.arial};
    font-size: 48px;
    font-weight: ${({theme})=> theme.weight.regular};
    text-shadow: rgb(0, 0, 0) 1px 0px 0px, rgb(0, 0, 0) 0.540302px 0.841471px 0px, rgb(0, 0, 0) -0.416147px 0.909297px 0px, rgb(0, 0, 0) -0.989992px 0.14112px 0px, rgb(0, 0, 0) -0.653644px -0.756802px 0px, rgb(0, 0, 0) 0.283662px -0.958924px 0px, rgb(0, 0, 0) 0.96017px -0.279415px 0px;
    
    @media ${({ theme }) => theme.media.small} {
        font-size: 38px;
    }
`;

export const Subtitle = styled.h3`
    color: ${({theme}) => theme.colors.white};
    font-family: ${({theme})=> theme.font.arial};
    font-weight: ${({theme})=> theme.weight.bold};
    font-size: 48px;
    text-shadow: rgb(0, 0, 0) 1px 0px 0px, rgb(0, 0, 0) 0.540302px 0.841471px 0px, rgb(0, 0, 0) -0.416147px 0.909297px 0px, rgb(0, 0, 0) -0.989992px 0.14112px 0px, rgb(0, 0, 0) -0.653644px -0.756802px 0px, rgb(0, 0, 0) 0.283662px -0.958924px 0px, rgb(0, 0, 0) 0.96017px -0.279415px 0px;
    
    @media ${({ theme }) => theme.media.small} {
        font-size: 38px;
    }
`;

export const TitleWrapper = styled.div``;
