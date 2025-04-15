const SidebarHeader = ({ setIsCollapsed, isCollapsed }) => {
  return (
    <div
      className="flex items-center gap-2 cursor-pointer h-12 w-full transition-all duration-300"
      onClick={() => setIsCollapsed(!isCollapsed)}
    >
      <img
        src="/logo.png"
        alt="logo da cifra"
        className="w-12 h-12 transition-all duration-300"
      />
      <h1
        className={`text-[var(--gray-300)] transition-all duration-300 cursor-pointer overflow-hidden ${
          isCollapsed ? "text-[0px]" : "text-base"
        }`}
      >
        Controle de Estoque
      </h1>
    </div>
  );
};

export default SidebarHeader;
