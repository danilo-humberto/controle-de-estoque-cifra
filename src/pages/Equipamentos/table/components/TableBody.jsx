import TableRow from "./TableRow";

const TableBody = ({ equipFiltrado, toggleSelection }) => {
  return (
    <tbody className="text-[var(--gray-300)]">
      {equipFiltrado && equipFiltrado.length > 0 ? (
        equipFiltrado.map((item) => (
          <TableRow
            key={item.imei_serie}
            item={item}
            onToggleSelect={() => toggleSelection(item.imei_serie)}
          />
        ))
      ) : (
        <tr>
          <td colSpan={6} align="center" className="text-sm p-2">
            Nenhum equipamento encontrado!
          </td>
        </tr>
      )}
    </tbody>
  );
};

export default TableBody;
