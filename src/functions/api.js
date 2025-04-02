import axios from 'axios'

const API_URL = "http://192.168.15.61:5000"

export const getLinhas = async () => {
    try {
        const response = await axios.get(`${API_URL}/visualizar_linhas`)
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar dados: ", error)
        throw error;
    }
}