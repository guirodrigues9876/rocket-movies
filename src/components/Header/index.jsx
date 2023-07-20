import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

import { Input } from '../Input';
import { ButtonText } from '../ButtonText';

import { Container, Profile} from './styles';

export function Header(){
    const { signOut } = useAuth();

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

            <Profile>
                <div>
                    <strong>Guilherme Santos</strong>
                    <ButtonText
                        title="Sair" onClick={signOut}
                    />
                </div>              
                    <img 
                    src="http://github.com/guirodrigues9876.png"
                    alt="Foto do usuário"
                    />
            </Profile>
        </Container>

    );
}