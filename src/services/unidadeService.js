import api from "./api";

export const getUnidades = async () => {
    const response = await api.get("/unidades");
    return response.data;
}