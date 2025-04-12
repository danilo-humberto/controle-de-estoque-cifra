import { useState } from "react";

export const useMovimentacaoTable = () => {
    const [isCadastroOpen, setIsCadastroOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    
    return {
        isCadastroOpen,
        setIsCadastroOpen,
        searchTerm,
        setSearchTerm
    }
}