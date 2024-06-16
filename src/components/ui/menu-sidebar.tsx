'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Home, LineChart, Package, Package2, ShoppingCart, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import CardUpgrade from "./card-upgrade";

export default function MenuSidebar() {
  const pathName = usePathname();

  const menuItems = [
    { href: "/", label: "Dashboard", icon: Home },
    { href: "/orders", label: "Pedidos", icon: ShoppingCart, badge: 6 },
    { href: "/products", label: "Produtos", icon: Package },
    { href: "/clients", label: "Clientes", icon: Users },
    { href: "/analytics", label: "Análise", icon: LineChart },
  ];

  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Package2 className="h-6 w-6" />
            <span className="">Yoozi</span>
          </Link>
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathName === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
                    isActive
                      ? "bg-muted text-primary"
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                  {item.badge && (
                    <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                      {item.badge}
                    </Badge>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
        <CardUpgrade/>
      </div>
    </div>
  );
}