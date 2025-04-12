const TableRow = () => {
  return (
    <tr>
      <td className="p-2" align="center">
        <input
          type="checkbox"
          className="
                          appearance-none border w-[0.9rem] h-[0.9rem] rounded-sm checked:bg-[var(--gray-200)] outline-none
                          relative before:content-['✔'] before:text-xs before:text-black before:absolute before:left-[1px] before:top-[-2px]
                          checked:before:block before:hidden checked:hover:bg-[var(--gray-300)]
                        "
        />
      </td>
      <td>contrato</td>
      <td>cpf</td>
      <td>gerencia</td>
      <td>nome</td>
      <td>regiao</td>
    </tr>
  );
};

export default TableRow;
