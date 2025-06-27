import axios from "axios";

// Cria uma instância do axios
const http = axios.create({
  baseURL: 'http://localhost:3000'
})

export default http;