import { Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function LanguageToggle() {
  const toggleLanguage = () => {
    const dir = document.documentElement.dir;
    document.documentElement.dir = dir === 'rtl' ? 'ltr' : 'rtl';
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => {
          document.documentElement.dir = 'rtl';
        }}>
          العربية
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => {
          document.documentElement.dir = 'ltr';
        }}>
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
