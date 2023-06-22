import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    padding: 24px;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900 };
    color: ${({theme}) => theme.COLORS.GRAY_300 };

    margin-bottom: 8px;

    > input {
        height: 56px;
        width: 100%;

        padding: 12px;
        color: ${({theme}) => theme.COLORS.WHITE};
        background: ${({theme}) => theme.COLORS.BACKGROUND_800 };
        border-radius: 10px;

        border: 0;

        &:placeholder {
            color: ${({theme}) => theme.COLORS.GRAY_300};
        }
    }
`;
