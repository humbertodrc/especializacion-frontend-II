import React, { useState } from 'react';
import style from '../LoginForm/styles/LoginForm.module.css';

interface LoginFormProps {
  onSubmit: (title: string, bodyPost: string) => void
}

const LoginForm : React.FC<LoginFormProps> = ({onSubmit}) => {
	const [title, setTitle] = useState('')
	const [bodyPost, setBodyPost] = useState('')
	
	
  const handleSubmit = async (evt: React.SyntheticEvent) => {
    evt.preventDefault()
		onSubmit(title, bodyPost)
		alert(`Enviado: ${title} ${bodyPost}`)
  }
  return (
		<form onSubmit={handleSubmit} className={style.formulario}>
			<label style={{color: 'black'}} htmlFor="title">Titulo</label>
			<input type="text" id='title' value={title} onChange={e => setTitle(e.target.value)} />
			<label style={{color: 'black'}} htmlFor="body">Contenido</label>
      <input type="text" id='body' value={bodyPost} onChange={e => setBodyPost(e.target.value)} />
      <button type="submit" className={style.send}>Enviar</button>
    </form>
  )
};

export default LoginForm;
