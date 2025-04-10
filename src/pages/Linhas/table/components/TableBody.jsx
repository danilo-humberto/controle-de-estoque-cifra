import TableRow from "./TableRow";

const TableBody = ({ linhas, onSelect }) => {
  if (!linhas || linhas.length === 0) {
    return (
      <tr>
        <td colSpan={4} align="center" className="text-sm p-2">
          Nenhuma linha encontrada!
        </td>
      </tr>
    );
  }

  return (
    <>
      {linhas.map((item) => (
        <TableRow key={item.linha} item={item} onSelect={onSelect} />
      ))}
    </>
  );
};

export default TableBody;
