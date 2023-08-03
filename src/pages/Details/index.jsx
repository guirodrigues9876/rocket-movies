import {  useState, useEffect, Fragment } from 'react';
import Rating from '@mui/material/Rating';
import StyledRating from '@mui/material/Rating';
import { FiArrowLeft, FiClock } from "react-icons/fi";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'


import { useAuth } from '../../hooks/auth';

import { api } from '../../services/api';

import { useParams, useNavigate } from 'react-router-dom';

import { Container } from './styles';

import { Header } from '../../components/Header';
import { Tag } from '../../components/Tag';
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';

export function Details() {
  const [ data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const params = useParams();
  const { user } = useAuth();

  const avatarUrl = user.avatar 
    ? `${api.defaults.baseURL}/files/${user.avatar}` 
    : avatarPlaceholder;
  

  function handleBack(){
    navigate(-1)
  }

  async function handleRemove(){
    const confirm = window.confirm("Deseja realmente remover a nota?");

    if (confirm) {
      await api.delete(`/notes/${params.id}`);
      navigate(-1);
    }
  }

  useEffect(() => {
    async function fetchNote(){
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
   }, []);

  return(
    <Container>
      <Header />

      <div>
      </div>
     { 
      data &&
      <main>

            <header>

              <ButtonText onClick={handleBack}>
                <FiArrowLeft />
                Voltar
              </ButtonText>

              <div className="title">
                <h2>{data.title}</h2>  
                <Rating
                  className="rating"
                  value={data.rating}
                  readOnly
                  sx={{
                    '& .MuiRating-iconFilled': {
                      color: '#FF859B',
                    },
                    '& .MuiRating-iconEmpty': {
                      color: '#FF859B',
                    },
                  }}
                />

              </div>
              <div className="profile">
                <img src={avatarUrl} />
                
                <p> Por {user.name} <FiClock /> {data.created_at}hrs</p>
              </div>
              
            </header>
              
            {
            data.tags &&(
              <div className="tags">
                {
                  data.tags.map((tag) => (
                    <Tag 
                      key={String(tag.id)}
                      title={tag.name}
                    /> 
                  ))
                }
              </div>
            )}
            
            <p>
              {data.description}
            </p>
            <Button 
              title= "Excluir Filme"
              className="btn-delete"
              onClick={ handleRemove}
              loading
            />
      </main>
      }
    </Container>
  )
}