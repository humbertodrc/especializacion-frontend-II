import axios from "axios";

// Creo una instancia
const postApi = axios.create({
  // Creo la base URL:
  baseURL: 'https://jsonplaceholder.typicode.com'
})

export default postApi;