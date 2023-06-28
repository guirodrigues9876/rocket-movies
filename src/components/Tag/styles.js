import styled from 'styled-components';

export const Container = styled.div` 
    width: fit-content;
    margin-right: 6px;

    border-radius: 8px;
    padding: 8px 16px;

    font-size: 12px;
    color: ${({ theme }) => theme.COLORS.WHITE_100};

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};


    > main{ 

        .tags {
            display: flex;
            flex-direction: row;
            background-color: yellow;
        }
    }
`;