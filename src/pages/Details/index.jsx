import {  useState, useEffect } from 'react';
import Rating from '@mui/material/Rating';
import { FiArrowLeft, FiClock } from "react-icons/fi";

import { useAuth } from '../../hooks/auth';

import { api } from '../../services/api';

import { Link, useParams } from 'react-router-dom';

import { Container } from './styles';

import { Header } from '../../components/Header';
import { Tag } from '../../components/Tag';

export function Details() {
  const [ data, setData] = useState(null);

  const { user } = useAuth();

  const avatarUrl = user.avatar 
    ? `${api.defaults.baseURL}/files/${user.avatar}` 
    : avatarPlaceholder;
  
  const params = useParams();

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

     { 
      data &&
      <main>
              <Link to="/">
                  <FiArrowLeft />
                  Voltar
              </Link>
            <header>
              <div className="title">
                <h2>{data.title}</h2>  
                <Rating
                  name="simple-controlled"
                  value={5}
                  onChange={(event, newValue) => {
                    setValue(newValue);
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
      </main>
      }
    </Container>
  )
}