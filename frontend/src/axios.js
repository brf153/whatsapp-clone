import axios from "axios"

const instance = axios.create({
    baseURL:"https://whatsapp-clone-backend-taupe.vercel.app",
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // Replace with the allowed origin if necessary
      },
})

export default instance