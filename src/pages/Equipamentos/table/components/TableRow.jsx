import React from "react";

const TableRow = ({ item, onToggleSelect }) => {
  return (
    <tr className="border-b border-[var(--gray-500)] text-sm">
      <td align="center" className="w-[50px] p-2">
        <input
          type="checkbox"
          checked={!!item.selecionado}
          onChange={onToggleSelect}
          className="
            appearance-none border w-[0.9rem] h-[0.9rem] rounded-sm checked:bg-[var(--gray-200)] outline-none
            relative before:content-['✔'] before:text-xs before:text-black before:absolute before:left-[1px] before:top-[-2px]
            checked:before:block before:hidden checked:hover:bg-[var(--gray-300)]
            "
        />
      </td>
      <td>{item.equipamento}</td>
      <td>{item.modelo}</td>
      <td>{item.imei_serie}</td>
      <td>{item.imei2}</td>
      <td>{item.tombamento}</td>
    </tr>
  );
};

export default TableRow;
