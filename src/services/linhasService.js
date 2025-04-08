import api from "./api";

export const getLinhas = async () => {
    const response = await api.get("/linhas");
    return response.data;
}

export const postLinhas = async (dados) => {
    const response = await api.post("/linhas/cadastrar", dados)
    return response.data;
}

export const deleteLinhas = async (linhas) => {
    const response = await api.delete(`/linhas/deletar/${linhas}`);
    return response.data;
}