import { Button } from "@/components/ui/button"
import { cn } from '@/lib/utils';

export default function ProductsPage() {
  return (
    <main className="flex flex-1 flex-col gap-2 p-2 lg:gap-4 lg:p-4">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Inventário</h1>
      </div>
      <div
        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1"
      >
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            Você não tem produtos 
          </h3>
          <p className="text-sm text-muted-foreground">
            Você pode começar a vender quando cadastrar um produto.
          </p>
          <Button className={cn("mt-8")}>Add Produto</Button>
        </div>
      </div>
    </main>
  )
}
