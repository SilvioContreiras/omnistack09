import React, { useState } from  'react';
import api from '../../services/api';

//history é usado para fazer navegação 

export default function Login({ history }) {

    // a veriável setEmail serve para atualizar o estado da variável email
    const [email, setEmail] = useState(''); 

    async function handleSubmit(event) {
      event.preventDefault();
  
      // é o mesmo que fazer email: email como os valores são iguias não precisamos escrever duas x;
      const response = await api.post('/sessions', { email });
  
      const { _id } =  response.data;
  
      // localStorage é um banco de dados do navegador
      localStorage.setItem('user', _id);

      history.push('/dashboard');
    }

    return (
        <>
            <p>
            Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
            </p>

            <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-MAIL *</label>
            <input 
                type="email"
                id="email"
                placeholder="Seu melhor e-mail" 
                value={email}
                onChange={event => setEmail(event.target.value)}
            />

            <button className="btn" type="submit">Entrar</button>
            </form>
        </>
        
    )
}