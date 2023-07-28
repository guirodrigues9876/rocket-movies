import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Container = styled.div`
    
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 116px 105px auto;
    grid-template-areas:
    "header"
    "menu"
    "content"
    ;
`;

export const Menu = styled.div`
    grid-area: menu;
    margin: 48px 120px;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    > h2 {
        font-size: 32px;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

`;

export const NewMovie = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 207px;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    height: 56px;
    border: 0;
    padding: 0 16px;
    margin-top: 16px;
    border-radius: 10px;
    font-weight: 500;

    &:disabled {
        background-color: ${({ theme }) => theme.COLORS.BLACK};
        color: ${({ theme }) => theme.COLORS.PINK};

    }

    > svg {
        width: 16px;
        height: 16px;
        margin-right: 8px;
    }

`;

export const Content = styled.div`
    grid-area: content;
    margin: 0 120px 48px;
    overflow-y: auto;
    padding-right: 5px;
`;

