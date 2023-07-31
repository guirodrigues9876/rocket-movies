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
        overflow-y: auto;
        padding: 64px 0;
        
        display: flex; 
        flex-direction: column;
        gap: 40px;
        margin: 40px 123px;

        > a {
            display: flex;
            align-items: center;
            gap: 8px;
            color: ${({ theme }) => theme.COLORS.PINK};
        }

        img {
          width: 1.6rem;
          height: 1.6rem;
          border-radius: 50%;
        }

        .profile{
            display: flex;
            gap: 8px;
            align-items: center;

            svg {
                color: ${({ theme }) => theme.COLORS.PINK};
            }
        }

        > header {
            display: flex;
            flex-direction: column;
            
            h2 {
                font-size: 36px;
                color: ${({ theme }) => theme.COLORS.WHITE};
            }

            .title{
                display: flex;
                gap: 19px;
                align-items: center;
            }
        }

        .tags {
            display: flex;
        }
    }
`;