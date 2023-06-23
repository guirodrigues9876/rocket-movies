import { FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Avatar } from './styles';

export function Profile(){
    return(
        <Container>
            <header>
                Voltar
            </header>
            <Form>
                <Avatar>
                    <img 
                        src="https://github.com/guirodrigues9876.png"
                        alt="Foto do usuário"
                    />

                    <label htmlFor="avatar">
                        <FiCamera />

                        <input
                            id="avatar"
                            type="file"
                        />
                    </label>
                </Avatar>
                <Input 
                    icon= { FiUser }
                    placeholder="Nome"
                />
                <Input 
                    icon= { FiMail }
                    placeholder="E-mail"
                />
                <Input 
                    icon= { FiLock }
                    placeholder="Senha atual"
                />
                <Input 
                    icon= { FiLock }
                    placeholder="Nova senha"
                />

                <Button title="Salvar"/>
            </Form>
        </Container>
    )
}