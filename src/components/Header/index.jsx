import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

// import { ButtonText } from '../ButtonText';

import { Container, Profile, Search, Logout} from './styles';

export function Header({ children }){
    const { signOut, user } = useAuth();
    const navigate = useNavigate();

    function handleSignOut(){
        navigate("/");
        signOut();
    };

    const avatarUrl = user.avatar 
        ? `${api.defaults.baseURL}/files/${user.avatar}` 
        : avatarPlaceholder;

    return(
        <Container>
            <Link to="/">
                <h1>RocketMovies</h1>
            </Link>
            
            <Search>{children}</Search>

            <Profile to="/profile">
                <div>
                    <strong>{user.name}</strong>
                </div>

                <img src={avatarUrl} alt={user.name} />
            </Profile>

            <Logout onClick={handleSignOut}>
                sair
            </Logout>
        </Container>
    );
}