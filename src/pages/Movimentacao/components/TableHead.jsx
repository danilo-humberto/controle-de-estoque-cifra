const TableHead = () => {
  return (
    <thead className="border-b border-[var(--gray-500)] font-bold text-[var(--gray-400)]">
      <tr>
        <th align="left" className="p-2 w-[40px] opacity-0">x</th>
        <th align="left">Contrato</th>
        <th align="left">CPF</th>
        <th align="left">Gerência</th>
        <th align="left">Nome</th>
        <th align="left">Região</th>
      </tr>
    </thead>
  );
};

export default TableHead;
