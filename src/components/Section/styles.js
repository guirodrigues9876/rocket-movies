import styled from 'styled-components';

export const Container = styled.section`
    margin: 28px 0;
    border-radius: 25px;

    > h2 {
        
      margin-bottom: 24px;  

      color: ${({ theme }) => theme.COLORS.GRAY_400};
      font-size: 20px;
      font-weight: 400;
    }
`;