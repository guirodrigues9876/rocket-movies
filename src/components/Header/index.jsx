import { Container, Profile, Brand} from './styles';

import { Input } from '../Input';

export function Header(){
    return(
        <Container>
            <Brand>
                {/* <Link to="/"> */}
                    <h1>RocketMovies</h1>
                {/* </Link> */}
            </Brand>
            {/* <Search> */}
                <Input
                    placeholder="Pesquisar pelo Título"
                />
            {/* </Search> */}

            <Profile>
                <div>
                    Guilherme Rodrigues
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