"use client"

import { Package, Search, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useProductStore } from "@/store/useProductStore"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header() {
  const { setTheme } = useTheme()
  const { searchQuery, setSearchQuery } = useProductStore()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur ">
      <div className="container mx-auto flex h-16 items-center px-4 sm:px-8">
        <div className="flex items-center gap-2 mr-4 md:mr-8">
          <div className="bg-primary text-primary-foreground p-1.5 rounded-lg">
            <Package className="h-5 w-5" />
          </div>
          <span className="text-lg font-bold tracking-tight hidden sm:inline-block">
            ProductFlow
          </span>
        </div>
        
        <div className="flex flex-1 items-center space-x-2">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full pl-9 bg-muted/50 border-transparent focus-visible:bg-transparent transition-colors"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center ml-auto">
          
          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </DropdownMenuTrigger>


            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>

            
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
