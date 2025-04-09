const TableHeader = () => {
  return (
    <thead className="border-b border-[var(--gray-500)] font-bold text-[var(--gray-400)]">
      <tr>
        <th align="left" className="w-[30px] p-2 opacity-0">
          x
        </th>
        <th align="left" className="w-[180px]">
          Equipamento
        </th>
        <th align="left" className="w-[300px]">
          Modelo
        </th>
        <th align="left" className="w-[210px]">
          IMEI 1 / Série
        </th>
        <th align="left" className="w-[210px]">IMEI 2</th>
        <th align="left" className="w-[180px]">
          Tombamento
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
