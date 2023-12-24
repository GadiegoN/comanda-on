import { Copy, GripVertical, Pencil, Pizza, Plus, Trash } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { Pagination } from '@/components/Table-Pagination'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { MenuProduct } from './menu-product'

export function Menu() {
  return (
    <>
      <Helmet title="Cardápio" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">
          Categorias do cardápio
        </h1>

        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <h2 className="p-4 text-2xl font-medium text-muted-foreground">
              Categorias
            </h2>
            <Button variant="ghost">
              <Plus className="mr-2 h-4 w-4" />
              Nova categoria
            </Button>
          </div>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[64px]">
                    <GripVertical className="h-4 w-4 cursor-grab" />
                    <span className="sr-only">Mover categoria</span>
                  </TableHead>
                  <TableHead className="w-full">
                    <div className="flex">
                      <Pizza className="mr-2 h-4 w-4" />
                      <h1>Pizzas Tradicionais</h1>
                    </div>
                  </TableHead>
                  <TableHead className="w-[240px]">
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
                  </TableHead>
                </TableRow>
              </TableHeader>
            </Table>
            <div className="flex items-center justify-between">
              <h2 className="p-4 text-xl font-medium text-muted-foreground">
                Produtos
              </h2>
              <Button variant="ghost">
                <Plus className="mr-2 h-4 w-4" />
                Novo produto
              </Button>
            </div>
            <Table>
              <TableBody>
                {Array.from({ length: 3 }).map((_, i) => (
                  <MenuProduct key={i} />
                ))}
              </TableBody>
            </Table>
          </div>
          <Pagination pageIndex={0} totalCount={105} perPage={10} />
        </div>
      </div>
    </>
  )
}
