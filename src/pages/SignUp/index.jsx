import { useState } from "react";
import { FiMail, FiLock, FiUser} from 'react-icons/fi';

import { Link, useNavigate } from 'react-router-dom';
import { api } from "../../services/api";

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Container, Form, Background } from './styles'

export function SignUp(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function handleSignup(){
        if(!name || !email || !password){
            return alert("Preencha todos os campos!");
        }

        api.post("/users", { name, email, password }).then(()=>{
            alert("Usuário cadastrado com sucesso!");
            navigate("/");
        })
        .catch(error => {
            if(error.response){
                alert(error.response.data.message);
            }else{
                alert("Não foi possível cadastrar");
            }
        });
    }

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
                    onChange={e => setName(e.target.value)}
                    />
                <Input
                    icon= {FiMail}
                    type= "text"
                    placeholder="E-mail"
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    icon= {FiLock}
                    type="password"
                    placeholder="Senha"
                    onChange={e => setPassword(e.target.value)}
                />

                <Button title="Cadastrar" onClick={handleSignup} />

                <Link to="/">
                    Voltar para o login
                </Link>
            </Form>

            <Background />
        </Container>
    )
}