
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Movie } from '../../components/Movie';

import { Container, Content, Menu } from './styles';

export function Home(){
    return(
        <Container>
            <Header />

            <Menu>
                <h2>Meus Filmes</h2>
                <Button title="Adicionar filme"></Button>
            </Menu>
            <Content>
                <Movie 
                    data={{
                        title: 'Iron man',
                        description: 'Tony Stark é um industrial bilionário e inventor brilhante que realiza testes bélicos no exterior, mas é sequestrado por terroristas que o forçam a construir uma arma devastadora. Em vez disso, ele constrói uma armadura blindada e enfrenta seus sequestradores. Ao voltar para os EUA, Stark aprimora a armadura e a utiliza para combater o crime.',
                        tags: [ 
                            {id: '1', name: 'Ação'},
                            {id: '2', name: 'Aventura'}
                        ]
                    }}
                />

<Movie 
                    data={{
                        title: 'Iron man',
                        description: 'Tony Stark é um industrial bilionário e inventor brilhante que realiza testes bélicos no exterior, mas é sequestrado por terroristas que o forçam a construir uma arma devastadora. Em vez disso, ele constrói uma armadura blindada e enfrenta seus sequestradores. Ao voltar para os EUA, Stark aprimora a armadura e a utiliza para combater o crime.',
                        tags: [ 
                            {id: '1', name: 'Ação'},
                            {id: '2', name: 'Aventura'}
                        ]
                    }}
                />
                <Movie 
                    data={{
                        title: 'Iron man',
                        description: 'Tony Stark é um industrial bilionário e inventor brilhante que realiza testes bélicos no exterior, mas é sequestrado por terroristas que o forçam a construir uma arma devastadora. Em vez disso, ele constrói uma armadura blindada e enfrenta seus sequestradores. Ao voltar para os EUA, Stark aprimora a armadura e a utiliza para combater o crime.',
                        tags: [ 
                            {id: '1', name: 'Ação'},
                            {id: '2', name: 'Aventura'}
                        ]
                    }}
                />
                <Movie 
                    data={{
                        title: 'Iron man',
                        description: 'Tony Stark é um industrial bilionário e inventor brilhante que realiza testes bélicos no exterior, mas é sequestrado por terroristas que o forçam a construir uma arma devastadora. Em vez disso, ele constrói uma armadura blindada e enfrenta seus sequestradores. Ao voltar para os EUA, Stark aprimora a armadura e a utiliza para combater o crime.',
                        tags: [ 
                            {id: '1', name: 'Ação'},
                            {id: '2', name: 'Aventura'}
                        ]
                    }}
                />
                <Movie 
                    data={{
                        title: 'Iron man',
                        description: 'Tony Stark é um industrial bilionário e inventor brilhante que realiza testes bélicos no exterior, mas é sequestrado por terroristas que o forçam a construir uma arma devastadora. Em vez disso, ele constrói uma armadura blindada e enfrenta seus sequestradores. Ao voltar para os EUA, Stark aprimora a armadura e a utiliza para combater o crime.',
                        tags: [ 
                            {id: '1', name: 'Ação'},
                            {id: '2', name: 'Aventura'}
                        ]
                    }}
                />
                <Movie 
                    data={{
                        title: 'Iron man',
                        description: 'Tony Stark é um industrial bilionário e inventor brilhante que realiza testes bélicos no exterior, mas é sequestrado por terroristas que o forçam a construir uma arma devastadora. Em vez disso, ele constrói uma armadura blindada e enfrenta seus sequestradores. Ao voltar para os EUA, Stark aprimora a armadura e a utiliza para combater o crime.',
                        tags: [ 
                            {id: '1', name: 'Ação'},
                            {id: '2', name: 'Aventura'}
                        ]
                    }}
                />
            </Content>
        </Container>
    )
}