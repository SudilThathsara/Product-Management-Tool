import { useState } from "react"
import { Product } from "@/store/useProductStore"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Edit2, Trash2, Image as ImageIcon } from "lucide-react"
import { DeleteAlertDialog } from "./DeleteAlertDialog"

interface ProductCardProps {
  product: Product;
  onEdit: (product: Product) => void;
  onDelete: (id: string) => void;
}

export function ProductCard({ product, onEdit, onDelete }: ProductCardProps) {
  const [deleteOpen, setDeleteOpen] = useState(false)
  const [imgError, setImgError] = useState(false)

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(product.price)

  return (
    <>
      <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50 group bg-card/50 backdrop-blur-sm">
        <div className="relative aspect-video w-full bg-muted overflow-hidden">
          {!imgError && product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full text-muted-foreground">
              <ImageIcon className="w-12 h-12 opacity-20" />
            </div>
          )}
          <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <Button
              size="icon"
              variant="secondary"
              className="w-8 h-8 rounded-full shadow-sm"
              onClick={() => onEdit(product)}
            >
              <Edit2 className="w-4 h-4" />
            </Button>
            <Button
              size="icon"
              variant="destructive"
              className="w-8 h-8 rounded-full shadow-sm"
              onClick={() => setDeleteOpen(true)}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        <CardHeader className="p-4 pb-2">
          <div className="flex justify-between items-start gap-4">
            <h3 className="font-semibold text-lg line-clamp-1 flex-1 leading-tight" title={product.name}>
              {product.name}
            </h3>
            <span className="font-bold text-primary">{formattedPrice}</span>
          </div>
        </CardHeader>
        
        <CardContent className="p-4 pt-0 flex-1">
          <p className="text-sm text-muted-foreground line-clamp-2" title={product.description}>
            {product.description}
          </p>
        </CardContent>
      </Card>

      <DeleteAlertDialog 
        open={deleteOpen} 
        onOpenChange={setDeleteOpen}
        onConfirm={() => onDelete(product.id)}
        productName={product.name}
      />
    </>
  )
}
