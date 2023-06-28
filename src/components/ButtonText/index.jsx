import { Container } from './styles';

export const ButtonText({ title, ...rest}){
    return(
        <Container>
            { title }
        </Container>
    )
}