import api from "./api.js";

export const getEquipamentos = async () => {
  const response = await api.get("/equipamentos");
  return response.data;
};

export const postEquipamentos = async (dados) => {
  const response = await api.post("/equipamentos/cadastrar", dados);
  return response.data;
};

export const putEquipamentos = async (dados) => {
  const response = await api.post("/equipamentos/editar", dados);
  return response.data;
};

export const deleteEquipamento = async (imei1) => {
  const response = await api.delete(`/equipamentos/deletar/${imei1}`);
  return response.data;
};
