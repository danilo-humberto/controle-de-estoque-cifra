import { getFuncionarios } from "@/services/funcionariosService";
import { getUnidades } from "@/services/unidadeService";
import { useEffect, useMemo, useState } from "react";

export const useFuncionariosTable = () => {
  const [func, setFunc] = useState([]);
  const [funcFiltrado, setFuncFiltrado] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isCadastroOpen, setIsCadastroOpen] = useState(false);
  const [isEditarOpen, setIsEditarOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [unidades, setUnidades] = useState([]);

  // PARA CADASTRAR
  const [contrato, setContrato] = useState("");
  const [cpf, setCpf] = useState("");
  const [gerencia, setGerencia] = useState("");
  const [nome, setNome] = useState("");
  const [regiao, setRegiao] = useState("");

  // PARA FILTRAR
  const [regioes, setRegioes] = useState([]);
  const [gerencias, setGerencias] = useState([]);

  const buscarFunc = async () => {
    try {
      const dados = await getFuncionarios();
      setFunc(dados);
      setFuncFiltrado(dados);
    } catch (error) {
      console.log(error);
    }
  };

  const buscarUnidades = async () => {
    try {
      const dados = await getUnidades();
      setUnidades(dados);
    } catch (error) {
      console.log(error);
    }
  };

  const handleContratoChange = (value) => {
    setContrato(value === "limpar" ? "" : value);
    setRegiao("");
    setGerencia("");
    setGerencias([]);

    const regioesFiltradas = unidades
      .filter((u) => u.nome === value)
      .map((u) => u.nome_regiao);

    const regioesUnicas = [...new Set(regioesFiltradas)];
    setRegioes(regioesUnicas);
  };

  const handleRegiaoChange = (value) => {
    setRegiao(value === "limpar" ? "" : value);
    setGerencia("");

    const gerenciasFiltradas = unidades
      .filter(
        (u) =>
          u.nome.toLowerCase() === contrato.toLowerCase() &&
          u.nome_regiao.toLowerCase() === value.toLowerCase()
      )
      .map((u) => u.nome_gerencia);

    const gerenciasUnicas = [...new Set(gerenciasFiltradas)];
    setGerencias(gerenciasUnicas);
  };

  const handleGerenciaChange = (value) => {
    setGerencia(value === "limpar" ? "" : value);
  };

  const handleCpfChange = (e) => {
    let valor = e.target.value.replace(/\D/g, "");

    if (valor.length > 11) valor = valor.slice(0, 11);

    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    setCpf(valor);
  };

  useEffect(() => {
    buscarFunc();
    buscarUnidades();
  }, []);

  useEffect(() => {
    const result = func.filter((func) => {
      const matchesSearch = Object.keys(func).some(key =>
        String(func[key]).toLowerCase().includes(searchTerm.toLowerCase())
      )

      return matchesSearch;
    });
    setFuncFiltrado(result);
  }, [func, searchTerm]);

  const contratosUnicos = Array.from(
    new Map(
      unidades.map((u) => [u.nome, { id: u.contratos_id, nome: u.nome }])
    ).values()
  );

  const openCadastroChange = () => {
    setIsCadastroOpen(!isCadastroOpen);
    setNome("");
    setCpf("");
    setContrato("");
    setRegiao("");
    setGerencia("");
  };

  const openEditarChange = () => {
    if (!funcionarioSelecionado[0]) return;

    const contratoSelecionado = funcionarioSelecionado[0].contrato;
    const regiaoSelecionada = funcionarioSelecionado[0].regiao;
    const gerenciaSelecionada = funcionarioSelecionado[0].gerencia;

    setContrato(contratoSelecionado);
    setGerencia(gerenciaSelecionada);
    setRegiao(regiaoSelecionada);
    setNome(funcionarioSelecionado[0].nome);
    setCpf(funcionarioSelecionado[0].cpf);

    const regioesFiltradas = unidades
      .filter((u) => u.nome === contratoSelecionado)
      .map((u) => u.nome_regiao);
    const regioesUnicas = [...new Set(regioesFiltradas)];
    setRegioes(regioesUnicas);

    const gerenciasFiltradas = unidades
      .filter(
        (u) =>
          u.nome.toLowerCase() === contratoSelecionado.toLowerCase() &&
          u.nome_regiao.toLowerCase() === regiaoSelecionada.toLowerCase()
      )
      .map((u) => u.nome_gerencia);
    const gerenciasUnicas = [...new Set(gerenciasFiltradas)];
    setGerencias(gerenciasUnicas);

    setIsEditarOpen(!isEditarOpen);
  };

  const openDeleteChange = () => {
    if(!funcionarioSelecionado[0]) return;

    setIsDeleteOpen(!isDeleteOpen)
  }

  const selecionarLinha = (cpf) => {
    setFunc((prev) =>
      prev.map((item) =>
        item.cpf === cpf ? { ...item, selecionado: !item.selecionado } : item
      )
    );
  };

  const funcionarioSelecionado = useMemo(() => {
      const selecionados = func.filter((item) => item.selecionado);
      return selecionados
    }, [func]);

    return {
        searchTerm,
        setSearchTerm,
        isCadastroOpen,
        openCadastroChange,
        nome,
        setNome,
        cpf,
        handleCpfChange,
        contrato,
        contratosUnicos,
        regiao,
        regioes,
        handleRegiaoChange,
        gerencia,
        handleGerenciaChange,
        gerencias,
        funcFiltrado,
        selecionarLinha,
        openEditarChange,
        handleContratoChange,
        isEditarOpen,
        setCpf,
        setContrato,
        setRegiao,
        setGerencia,
        setIsCadastroOpen,
        buscarFunc,
        setIsEditarOpen,
        funcionarioSelecionado,
        openDeleteChange,
        isDeleteOpen,
        setIsDeleteOpen
    }
};
