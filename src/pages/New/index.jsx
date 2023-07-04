import { Link } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { MovieItem } from '../../components/MovieItem';

import { Container, Form } from './styles';

export function New() {
    return(
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <Link to="/">
                            <FiArrowLeft />
                            Voltar
                        </Link>
                        <h1>Novo Filme</h1>
                    </header>
                    
                    <div className="inputs">
                        <Input 
                        placeholder="Título"
                        />
                        <Input 
                        placeholder="Sua nota (de 0 a 5)"
                        />
                    </div>

                    <Textarea placeholder="Observações"/>

                    <Section title= "Marcadores">
                        <div className="tags">
                            <MovieItem value="Ação" />
                            <MovieItem value="Aventura" />
                            <MovieItem value="Ficção Científica" />
                            <MovieItem isNew placeholder="Novo marcador" />
                        </div>
                    </Section>

                    <div className="buttons">
                        <Button loading title="Excluir filme" />
                        <Button title="Salvar alterações"/>
                    </div>
                    
                </Form>
            </main>
        </Container>
    )
}