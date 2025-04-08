import axios from "axios";

const API_URL = "http://192.168.15.71:5000";

const api = axios.create({
  baseURL: API_URL,
})

api.interceptors.request.use((config) => {
  if (config.data instanceof FormData) {
    config.headers = {
      ...config.headers,
      "Content-Type": "multipart/form-data",
    }
  } else {
    config.headers = {
      ...config.headers,
      "Content-Type": "application/json",
    }
  }
  return config;
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log("Erro na requisição: ", error);
    throw(error);
  }
);

export default api;

// GET ROUTES
// export const getLinhas = async () => {
//   try {
//     const response = await axios.get(`${API_URL}/linhas`);
//     return response.data;
//   } catch (error) {
//     console.error("Erro ao buscar dados: ", error);
//     throw error;
//   }
// };

// export const getFuncionarios = async () => {
//   try {
//     const response = await axios.get(`${API_URL}/funcionarios`);
//     return response.data;
//   } catch (error) {
//     console.error("Erro ao buscar dados: ", error);
//     throw error;
//   }
// };

// export const getEquipamentos = async () => {
//   try {
//     const response = await axios.get(`${API_URL}/equipamentos`);
//     return response.data;
//   } catch (error) {
//     console.error("Erro ao buscar dados: ", error);
//     throw error;
//   }
// };

// export const getAllUnidades = async () => {
//   try {
//     const response = await axios.get(`${API_URL}/unidades`);
//     return response.data;
//   } catch (error) {
//     console.error("Erro ao buscar dados", error);
//     throw error;
//   }
// };

// // POST ROUTES
// export const postFuncionarios = async (dados) => {
//   try {
//     const response = await axios.post(
//       `${API_URL}/funcionarios/cadastrar`,
//       dados,
//       {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       }
//     );
//     return response.data;
//   } catch (error) {
//     console.error("Erro ao buscar dados: ", error);
//     throw error;
//   }
// };

// export const postEquipamentos = async (dados) => {
//   try {
//     const response = await axios.post(
//       `${API_URL}/equipamentos/cadastrar`,
//       dados,
//       {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       }
//     );
//     return response.data;
//   } catch (error) {
//     console.error("Erro ao buscar dados: ", error);
//     throw error;
//   }
// };

// export const postLinhas = async (dados) => {
//   try {
//     const response = await axios.post(`${API_URL}/linhas/cadastrar`, dados, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Erro ao buscar dados: ", error);
//     throw error;
//   }
// };

// // PUT ROUTES
// export const putEquipamentos = async (dados) => {
//   try {
//     const response = await axios.post(`${API_URL}/equipamentos/editar`, dados, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Erro ao buscar dados: ", error);
//     throw error;
//   }
// };

// export const putFuncionarios = async (dados) => {
//   try {
//     const response = await axios.post(`${API_URL}/funcionarios/editar`, dados, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Erro ao buscar dados: ", error);
//     throw error;
//   }
// };

// // DELETE ROUTES
// export const deleteEquipamento = async (imei1) => {
//   try {
//     const response = await axios.delete(
//       `${API_URL}/equipamentos/deletar/${imei1}`
//     );
//     return response.data;
//   } catch (error) {
//     console.error("Erro ao buscar dados: ", error);
//     throw error;
//   }
// };

// export const deleteFuncionario = async (cpf) => {
//   try {
//     const response = await axios.delete(
//       `${API_URL}/funcionarios/deletar/${cpf}`
//     );
//     return response.data;
//   } catch (error) {
//     console.error("Erro ao buscar dados: ", error);
//     throw error;
//   }
// };

// export const deleteLinha = async (linha) => {
//   try {
//     const response = await axios.delete(`${API_URL}/linhas/deletar/${linha}`);
//     return response.data;
//   } catch (error) {
//     console.error("Erro ao buscar dados: ", error);
//     throw error;
//   }
// };
