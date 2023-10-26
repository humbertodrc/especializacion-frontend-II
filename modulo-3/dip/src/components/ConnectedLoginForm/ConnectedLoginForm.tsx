import postApi from '../../apis/postApi';
import { LoginForm } from '../LoginForm';

export const ConnectedLoginForm = () => {

  const handleSubmit = async(title: string, bodyPost: string) => {
    await postApi.post("/posts", { title, body: bodyPost })
  }

  return (
    <LoginForm onSubmit={handleSubmit} />
  )
}