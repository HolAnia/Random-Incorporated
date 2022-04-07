import styled from 'styled-components';

export const CursorWrapper = styled.div`

    @media ${({ theme }) => theme.media.small } {
        display: none;
    }
`;

export const CursorStyled = styled.div`
    width: 15px;
    height: 15px;
    margin: -7.5px 0 0 -7.5px;
    background-color: ${({theme}) => theme.colors.white};
    position: fixed;
    z-index: 30;
    border-radius: 50%;
    transform: translate3d(0, 0, 0);
    pointer-events: none;
`;

export const FollowCursorStyled = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid ${({theme}) => theme.colors.white};
    position: fixed;
    margin: -20px 0 0 -20px;
    z-index: 1000;
    transform: translate3d(0, 0, 0);
    background-color: rgba(0, 0, 0, 0);
    pointer-events: none;
`;
