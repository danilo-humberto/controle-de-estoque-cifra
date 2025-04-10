import Filtros from "./filters/Filtros";
import AddDialog from "./dialogs/AddDialog";
import DeleteDialog from "./dialogs/DeleteDialog";

const TableToolbar = ({
  searchTerm,
  setSearchTerm,
  operadora,
  setOperadora,
  status,
  setStatus,
  resetFilters,
}) => (
  <div className="flex justify-between w-full pb-4 items-center sticky top-[4.5rem] z-10 bg-[var(--gray-800)]">
    <Filtros
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      operadora={operadora}
      setOperadora={setOperadora}
      status={status}
      setStatus={setStatus}
      resetFilters={resetFilters}
    />
    <div className="flex items-center gap-4">
      <AddDialog />
      <DeleteDialog />
    </div>
  </div>
);

export default TableToolbar;