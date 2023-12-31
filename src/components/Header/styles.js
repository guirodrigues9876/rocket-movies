import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
    grid-area: header;

    height: 116px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

    display: flex;
    align-items: center;
    gap: 64px;
    padding: 0 123px;

    > a {
        display: flex;
        align-items: center;
        gap: 8px;
        color: ${({ theme }) => theme.COLORS.PINK};
        
        > h1 {
            font-size: 24px;
            color: ${({ theme }) => theme.COLORS.PINK};
        }
        
    }

    > a {
        > img {
            width: 64px;
            height: 64px;
            border-radius: 50%;
        }
    }
    
    `;

export const Search = styled.div`
    display: flex;
    align-items: center;
    flex-grow: 1;
`;

export const Profile = styled(Link)`
    display: flex;
    gap: 8px;
    align-items: center;   
    
    > div {
        display: flex;
        width: auto;
        height: auto;
        flex-direction: column;
        align-items: flex-end;

        strong {
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.WHITE};
            white-space: nowrap;
        }
    }
`;

export const Logout = styled.button`
    border: none;
    background: none;

    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 14px;
    line-height: 18px;

    position: absolute;
    top: 68px;
    right: 193px;
`;