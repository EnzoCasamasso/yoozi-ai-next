'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CircleUser, Home, LineChart, Menu, Package, Package2, Search, ShoppingCart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathName = usePathname();
  const sheetItems = [
    { href: "/", label: "Dashboard", icon: Home },
    { href: "/orders", label: "Pedidos", icon: ShoppingCart, badge: 6 },
    { href: "/products", label: "Produtos", icon: Package },
    { href: "/clients", label: "Clientes", icon: Users },
    { href: "/analytics", label: "Análise", icon: LineChart },
  ];
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <nav className="grid gap-2 text-lg font-medium">
            <Link href="#" className="flex items-center gap-2 text-lg font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="sr-only">Yoozi</span>
            </Link>
            {sheetItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathName === item.href
                return (
                  <Link 
                    href={item.href}
                    key={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
                    isActive
                      ? "bg-muted text-primary"
                      : "text-muted-foreground hover:text-primary"
                    )}>
                    <Icon className="h-4 w-4" />
                    {item.label}
                    {item.badge && (
                      <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                        {item.badge}
                      </Badge>
                    )}
                  </Link>
                )
            })}
          </nav>
          <div className="mt-auto">
            <Card>
              <CardHeader>
                <CardTitle>Upgrade para Pro</CardTitle>
                <CardDescription>
                  Desbloqueie todas as funcionalidades e tenha acesso exclusivo ao nosso suporte.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="sm" className="w-full">
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
        </SheetContent>
      </Sheet>
      <div className="w-full flex-1">
        <form>
          {/* <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Pesquisar" className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3" />
          </div> */}
        </form>
      </div>
      <ThemeToggle />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            <CircleUser className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Configurações</DropdownMenuItem>
          <DropdownMenuItem>Suporte</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Sair</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}