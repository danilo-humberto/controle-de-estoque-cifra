import TableRow from "./TableRow";

const TableBody = ({ func, selecionarLinha }) => {
  if (!func || func.length === 0) {
    return (
      <tr>
        <td colSpan={6} align="center" className="text-sm p-2">
          Nenhum funcionário encontrado!
        </td>
      </tr>
    );
  }

  return (
    <>
      {func.map((item) => (
        <TableRow key={item.cpf} item={item} selecionarLinha={selecionarLinha} />
      ))}
    </>
  )
};

export default TableBody;
