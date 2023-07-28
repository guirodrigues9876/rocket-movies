import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { ButtonText } from '../ButtonText';

import { Container, Profile, Search} from './styles';

export function Header({ children }){
    const { signOut, user } = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    return(
        <Container>
            <Link to="/">
                <h1>RocketMovies</h1>
            </Link>
            
            <Search>{children}</Search>

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