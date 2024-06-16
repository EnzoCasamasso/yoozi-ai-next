import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./card"
import { Button } from "./button"

export default function CardUpgrade() {
    return (
        <div className="mt-auto p-4">
          <Card>
            <CardHeader className="p-2 pt-0 md:p-4">
              <CardTitle>Upgrade para Pro</CardTitle>
              <CardDescription>
                Desbloqueie todas as funcionalidades e tenha acesso exclusivo ao nosso suporte.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
              <Button size="sm" className="w-full">
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </div>
    )
}