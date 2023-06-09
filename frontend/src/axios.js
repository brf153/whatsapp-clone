import axios from "axios"

const instance = axios.create({
    baseURL:"https://whatsapp-clone-backend-taupe.vercel.app/"
})

export default instance
