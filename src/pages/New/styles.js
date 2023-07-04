import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content"
    ;

    > main {
        grid-area: content;
        gap: 40px;
        overflow-y: auto;
    }

    .inputs{
        display: flex;
        gap: 40px;
        justify-content: space-between;

    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 24px;
        border-radius: 8px;
        padding: 16px;

        background-color: ${({ theme }) => theme.COLORS.BLACK};
    }

    .buttons {
        display: flex;
        gap: 40px;
    }

`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    margin: 40px auto;
    gap: 40px;

    > header {
        display: flex;
        flex-direction: column;
        gap: 24px;

        > a {
            display: flex;
            align-items: center;
            gap: 8px;
            color: ${({ theme }) => theme.COLORS.PINK};
        }
    }

`;