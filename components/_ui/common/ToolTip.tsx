
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

function ToolTip({children, message}:{children:React.ReactNode, message:string}) {
  return (
    <TooltipProvider delayDuration={100}>
    <Tooltip>
        <TooltipTrigger>
                {children}
        </TooltipTrigger>
        <TooltipContent>
            <p className="text-sm">{message}</p>
        </TooltipContent>
    </Tooltip>
</TooltipProvider>
  )
}

export default ToolTip