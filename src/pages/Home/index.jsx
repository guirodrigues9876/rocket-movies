import { useNavigate } from 'react-router-dom';
import { useState, useEffect} from 'react';
import { FiPlus } from 'react-icons/fi';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Movie } from '../../components/Movie';
import { api } from '../../services/api';

import { Container, Content, Menu, NewMovie } from './styles';

export function Home(){

    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);

    const navigate = useNavigate();


    function handleDetails(id){
        navigate(`/details/${id}`);
    }

    useEffect(() => {
        async function fetchMovies(){
            const response = await api.get(`/notes?title=${search}`);
            setMovies(response.data);
        }

        fetchMovies();
    }, [search]);


    return(
        <Container>
            <Header>
                <Input
                    placeholder="Pesquisar pelo Título"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </Header>

            <Menu>
                <h2>Meus Filmes</h2>
                <NewMovie to="/new">
                    <FiPlus />
                    Adicionar Filme
                </NewMovie>
            </Menu>

            <Content>
            {movies.map((movie) => (
                <Movie
                key={String(movie.id)}
                data={(movie)}
                onClick={() => handleDetails(movie.id)}
                />
            ))}
            </Content>
        </Container>
    )
}