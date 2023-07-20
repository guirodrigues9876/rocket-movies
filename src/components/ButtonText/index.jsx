import { Container } from './styles';

export function ButtonText({ title, isActive = false, ...rest }){
    return  (
        <Container 
            type="Button"
            isActive={isActive}
            {...rest}
        >
            {title}
        </Container>
    );
}