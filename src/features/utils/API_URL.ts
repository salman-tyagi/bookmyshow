const API_URL: string =
  import.meta.env.MODE === 'development'
    ? 'http://localhost:8080'
    : 'https://apibookmyshow.onrender.com';

export default API_URL;
