import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
    grid-area: header;

    height: 116px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    gap: 64px;
    padding: 0 80px;

`;

export const Profile = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;

    > img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        line-height: 24px;

        span {
            font-size: 14px;
            white-space: nowrap;
            color: ${({theme}) => theme.COLORS.WHITE};
        }
    }
`;

export const Brand = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    > h1 {
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.PINK}
    }
`;