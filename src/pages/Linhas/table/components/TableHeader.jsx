const TableHeader = () => {
  return (
    <thead className="border-b border-[var(--gray-500)] font-bold text-[var(--gray-400)]">
      <tr>
        <th align="left" className="p-2 w-[40px] opacity-0">
          x
        </th>
        <th align="left" className="w-[562px]">
          Linha
        </th>
        <th align="left" className="w-[490px]">
          Operadora
        </th>
        <th align="left" className="w-[330px]">
          Status
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
