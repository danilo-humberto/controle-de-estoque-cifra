const TableHeader = () => {
  return (
    <thead className="border-b border-[var(--gray-500)] font-bold text-[var(--gray-400)]">
      <tr>
        <th align="left" className="w-[40px] opacity-0 p-2">
          x
        </th>
        <th align="left" className="w-[350px]">
          Contrato
        </th>
        <th align="left" className="w-[300px]">
          Região
        </th>
        <th align="left" className="w-[250px]">
          Gerência
        </th>
        <th align="left">Nome</th>
        <th align="left" className="w-[200px]">
          CPF
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
