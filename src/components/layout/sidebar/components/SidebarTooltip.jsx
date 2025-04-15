import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const SidebarTooltip = ({ icon, label, isSmallScreen }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{icon}</TooltipTrigger>
        <TooltipContent className="bg-[var(--gray-700)] border-[var(--gray-900)]">
          <p
            className={`text-[var(--gray-300)] ${
              isSmallScreen ? "text-xs" : "text-sm"
            }`}
          >
            {label}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default SidebarTooltip;
