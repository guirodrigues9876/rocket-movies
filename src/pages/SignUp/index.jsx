import { FiMail, FiLock, FiUser} from 'react-icons/fi';

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Container, Form, Background } from './styles'

export function SignUp(){
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie Sua conta</h2>

                <Input
                    icon= {FiUser}
                    type= "text"
                    placeholder="Nome"
                    />
                <Input
                    icon= {FiMail}
                    type= "text"
                    placeholder="E-mail"
                />
                <Input
                    icon= {FiLock}
                    type="password"
                    placeholder="Senha"
                />

                <Button title="Cadastrar"/>

            </Form>

            <Background />
        </Container>
    )
}