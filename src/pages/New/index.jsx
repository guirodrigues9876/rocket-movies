import { useState } from 'react';
import { Link} from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";

import { useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { MovieItem } from '../../components/MovieItem';

import { api } from '../../services/api';

import { Container, Form } from './styles';

export function New() {
    const [ title, setTitle] = useState("");
    const [ rating, setRating] = useState("");
    const [ description, setDescription] = useState("");

    const [ tags,setTags] = useState([]);
    const [ newTag, setNewTag] = useState("");

    const navigate = useNavigate();

    function handleAddTag(){
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }

    async function handleNewNote(){

        if(!title){
            return alert("Digite o título da nota");
        }

        if(!rating){
            return alert("Digite a sua nota para o filme");
        }

        if(newTag){
            return alert("Você deixou um tag no campo para adicionar, mas não adicionou")
        }

      
        await api.post("/notes", {
            title,
            rating,
            description,
            tags
        });

        alert("Nota criada com sucesso!");
        navigate("/");
    }

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
                            onChange={e => setTitle(e.target.value)}
                        />
                        <Input 
                            placeholder="Sua nota (de 0 a 5)"
                            onChange={e => setRating(e.target.value)}
                        />
                    </div>

                    <Textarea 
                        placeholder="Observações"
                        onChange={e => setDescription(e.target.value)}
                    />

                    <Section title= "Marcadores">
                        <div className="tags">
                            {   
                                tags.map((tag, index) => (
                                    <MovieItem
                                        key={String(index)}
                                        value={tag} 
                                        onClick={() => handleRemoveTag(tag)}
                                    />
                                ))
                            }
                            <MovieItem 
                                isNew 
                                placeholder="Novo marcador" 
                                onChange={e => setNewTag(e.target.value)}
                                value={newTag}
                                onClick={handleAddTag}
                            />
                        </div>
                    </Section>

                    <div className="buttons">
                        <Button loading title="Excluir filme" />
                        <Button 
                            title="Salvar alterações"
                            onClick={handleNewNote}
                        />
                    </div>
                    
                </Form>
            </main>
        </Container>
    )
}