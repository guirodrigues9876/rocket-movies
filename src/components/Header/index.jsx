import { Link } from 'react-router-dom';

import { Input } from '../Input';

import { Container, Profile} from './styles';

export function Header(){
    return(
        <Container>
                <Link to="/">
                    <h1>RocketMovies</h1>
                </Link>
            {/* <Search> */}
                <Input
                    placeholder="Pesquisar pelo Título"
                />
            {/* </Search> */}

            <Profile to="/profile">
                <div>
                    <strong>Guilherme Santos</strong>
                    <span>sair</span>
                </div>              
                    <img 
                    src="http://github.com/guirodrigues9876.png"
                    alt="Foto do usuário"
                    />
            </Profile>
        </Container>

    );
}