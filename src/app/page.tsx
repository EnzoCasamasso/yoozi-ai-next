import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Component() {
  return (
    <main className="flex flex-col gap-8">
      <Card className="sm:col-span-2 flex flex-col items-center justify-center h-64">
        <CardHeader className="pb-4 text-center">
          <CardTitle className={cn("text-3xl text-center sm:text-5xl sm:text-center")}>
            Use sua criatividade com 
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent"> Yoozi</span>
          </CardTitle>
        </CardHeader>
        <CardContent className={cn("text-center")}>
          <CardDescription className="max-w-lg text-center leading-relaxed">
              Introducing Our Dynamic Orders Dashboard for Seamless Management and
              Insightful Analysis.
            </CardDescription>
          </CardContent>
      </Card>
      <div className="flex flex-row justify-between items-center">
        <h1 className={cn("text-3xl font-bold sm:font-bold sm:text-4xl")}>Recentes</h1>
        <div className="relative flex w-full md:w-2/3 lg:w-1/3 justify-end">
          <div className="relative w-full">
            <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Pesquisar" className="w-full appearance-none bg-background pl-8 shadow-none" />
          </div>
        </div>
      </div>
    </main>
  )
}