import styled from 'styled-components';

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

    > Button {
        width: 207px;
    }
`;

export const Content = styled.div`
    grid-area: content;
    margin: 0 120px 48px;
    overflow-y: auto;
    padding-right: 5px;
   
`;