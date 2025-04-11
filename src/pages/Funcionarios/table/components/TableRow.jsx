const TableRow = ({item, selecionarLinha}) => {
  return (
    <tr key={item.id} className="text-sm">
      <td className="p-2" align="center">
        <input
          type="checkbox"
          checked={!!item.selecionado}
          onChange={() => selecionarLinha(item.cpf)}
          className="
                          appearance-none border w-[0.9rem] h-[0.9rem] rounded-sm checked:bg-[var(--gray-200)] outline-none
                          relative before:content-['✔'] before:text-xs before:text-black before:absolute before:left-[1px] before:top-[-2px]
                          checked:before:block before:hidden checked:hover:bg-[var(--gray-300)]
                        "
        />
      </td>
      <td>{item.contrato}</td>
      <td>{item.regiao}</td>
      <td>{item.gerencia}</td>
      <td>{item.nome}</td>
      <td>{item.cpf}</td>
    </tr>
  );
};

export default TableRow;
