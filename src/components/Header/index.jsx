import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import { Input } from '../Input';
import { ButtonText } from '../ButtonText';

import { Container, Profile} from './styles';

export function Header(){
    const { signOut, user } = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

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
                    <strong>{user.name}</strong>
                    <ButtonText
                        title="Sair" onClick={signOut}
                    />
                </div>               
            </Profile>

            <Link to="/profile">
                <img 
                    src={avatarUrl}
                    alt={user.name}
                />
            </Link>
        </Container>
    );
}