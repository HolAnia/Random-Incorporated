import styled from 'styled-components';

export const FooterWrapper = styled.footer`
    display: flex;
    flex-direction: column;
`;

export const FooterTop = styled.div`
    background-color: ${({theme}) => theme.colors.lightGrey};
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 91px;

    @media ${({ theme }) => theme.media.small} {
        padding: 0 20px;
        flex-direction: column;
        justify-content: center;
    }
`;

export const FooterText = styled.p`
    font-family: ${({theme}) => theme.font.arial};
    font-weight: ${({theme}) => theme.weight.bold};
    font-size: 18px;
    font-style: italic;
    color: ${({theme}) => theme.colors.footer};
    opacity: 0.6;

    @media ${({ theme }) => theme.media.small} {
        text-align: center;
    }
`;

export const FooterSocialWrapper = styled.div`
    display: flex;
    width: 20%;
    justify-content: space-around;

    @media ${({ theme }) => theme.media.small} {
        width: 80%;
        margin-top:25px;
    }
`;

export const FooterSocial = styled.div`
    width: 26px;
    height: 26px;
    background-image: ${ ({ url }) => `url('${ url }')`};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`;

export const FooterBottom = styled.div`
    height: 95px;
    padding-left: 95px;
    display: flex;
    align-items: center;
    color: ${({theme}) => theme.colors.footer2};
    fot-size: 13px;
    background-color: ${({theme}) => theme.colors.footer2bg};

    @media ${({ theme }) => theme.media.small} {
        justify-content: center;
        padding: 0;
    }
`;