import { Copy, GripVertical, Pencil, Trash } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'

export function MenuProduct() {
  return (
    <TableRow>
      <TableCell className="w-[64px]">
        <GripVertical className="h-4 w-4 cursor-grab" />
        <span className="sr-only">Mover produto</span>
      </TableCell>
      <TableCell className="w-[128px]">
        <img
          src="https://github.com/gadiegon.png"
          alt="Foto do produto"
          width={100}
          height={100}
          className="rounded-2xl"
        />
      </TableCell>
      <TableCell>
        <h4 className="text-xl font-medium">Calabresa</h4>
        <p className="text-muted-foreground">
          Molho de tomate. mussarela, cebola, calabresa, catupiry
        </p>
        <span className="text-xl font-bold text-primary">R$ 58,80</span>
      </TableCell>
      <TableCell className="w-[140px]">
        <div className="flex gap-4">
          <Button variant="ghost" className="p-0">
            <Pencil className="h-4 w-4" />
            <span className="sr-only">Editar categoria</span>
          </Button>
          <Button variant="ghost" className="p-0">
            <Copy className="h-4 w-4" />
            <span className="sr-only">Duplicar categoria</span>
          </Button>
          <Button variant="ghost" className="p-0">
            <Trash className="h-4 w-4" />
            <span className="sr-only">Excluir categoria</span>
          </Button>
        </div>
      </TableCell>
    </TableRow>
  )
}
