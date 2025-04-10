const TableRow = ({item, onSelect}) => {
  return (
    <tr className="border-b border-[var(--gray-500)] text-sm">
      <td className="p-2">
        <input
          type="checkbox"
          checked={!!item.selecionado}
          onChange={() => onSelect(item.linha)}
          className="appearance-none border w-[0.9rem] h-[0.9rem] rounded-sm checked:bg-[var(--gray-200)] outline-none
        relative before:content-['✔'] before:text-xs before:text-black before:absolute before:left-[1px] before:top-[-2px]
        checked:before:block before:hidden checked:hover:bg-[var(--gray-300)]"
        />
      </td>
      <td>{item.linha}</td>
      <td
        className={
          item.operadora === "VIVO" ? "text-purple-500" : "text-red-500"
        }
      >
        {item.operadora}
      </td>
      <td>{item.status}</td>
    </tr>
  );
};

export default TableRow;
