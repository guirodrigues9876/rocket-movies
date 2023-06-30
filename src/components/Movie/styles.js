import styled from 'styled-components';

export const Container = styled.button`

    display: flex;
    flex-direction: column;
    gap: 16px;

    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

    border: none;
    border-radius: 16px;

    padding: 32px;
    margin-bottom: 24px;

    > h1 {
        flex: 1;
        text-align: left;
        font-weight: 700;
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > p {
        text-align: left;
        color: ${({ theme }) => theme.COLORS.GRAY_400};

    }

    > footer {
        width: 100%;
        display: flex;
        margin-top: 24px;

    }
`;
