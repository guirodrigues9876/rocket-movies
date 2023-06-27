import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.GRAY_300}` : "none"};

    border-radius: 10px;
    margin-bottom: 8px;

    padding: 16px;

    > button {
        border: none;
        background: none;
        color: ${({ theme }) => theme.COLORS.PINK };
        font-size: 24px;
        text-align: center;
    }


    > input {
        height: 30px;
        width: 100%;
        padding: 10px;

        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;

        border: none;

        &::placeholder {

            color: ${({ theme }) => theme.COLORS.GRAY_300};

        }
    }
`;