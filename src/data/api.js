import axios from 'axios'

const API_URL = "http://192.168.15.71:5000"


// GET ROUTES
export const getLinhas = async () => {
    try {
        const response = await axios.get(`${API_URL}/linhas`)
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar dados: ", error)
        throw error;
    }
}

export const getFuncionarios = async () => {
    try {
        const response = await axios.get(`${API_URL}/funcionarios`)
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar dados: ", error)
        throw error;
    }
}

export const getEquipamentos = async () => {
    try {
        const response = await axios.get(`${API_URL}/equipamentos`)
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar dados: ", error)
        throw error;
    }
}

export const getAllUnidades = async () => {
    try {
        const response = await axios.get(`${API_URL}/unidades`)
        return response.data
    } catch (error) {
        console.error("Erro ao buscar dados", error)
        throw error;
    }
}

// POST ROUTES
export const postFuncionarios = async (dados) => {
    try {
        const response = await axios.post(`${API_URL}/funcionarios/cadastrar`, dados, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
        return response.data
    } catch (error) {
        console.error("Erro ao buscar dados: ", error)
        throw error;
    }
}

export const postEquipamentos = async (dados) => {
    try {
        const response = await axios.post(`${API_URL}/equipamentos/cadastrar`, dados, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
        return response.data
    } catch (error) {
        console.error("Erro ao buscar dados: ", error)
        throw error;
    }
}