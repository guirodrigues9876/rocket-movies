import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_800};
    color: ${({theme}) => theme.COLORS.GRAY_300};

    border: 
`;