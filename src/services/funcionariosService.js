import api from "./api.js";

export const getFuncionarios = async () => {
    const response = await api.get("/funcionarios");
    return response.data;
}

export const postFuncionarios = async (dados) => {
    const response = await api.post("/funcionarios/cadastrar", dados);
    return response.data;
}

export const putFuncionarios = async (dados) => {
    const response = await api.post("/funcionarios/editar", dados);
    return response.data;
}

export const deleteFuncionarios = async (cpf) => {
    const response = await api.delete(`/funcionarios/deletar/${cpf}`);
    return response.data;
}