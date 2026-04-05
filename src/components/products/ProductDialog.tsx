import { Product } from "@/store/useProductStore"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ProductForm, ProductFormValues } from "./ProductForm"

interface ProductDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product?: Product | null;
  onSubmit: (data: ProductFormValues) => void;
}

export function ProductDialog({ open, onOpenChange, product, onSubmit }: ProductDialogProps) {
  const isEditing = !!product

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{isEditing ? "Edit Product" : "Add New Product"}</DialogTitle>
          <DialogDescription>
            {isEditing 
              ? "Make changes to your product here. Click save when you're done." 
              : "Fill in the details below to add a new product to your inventory."}
          </DialogDescription>
        </DialogHeader>
        
        <ProductForm 
          initialData={product} 
          onSubmit={(data) => {
            onSubmit(data)
            onOpenChange(false)
          }} 
          onCancel={() => onOpenChange(false)} 
        />
      </DialogContent>
    </Dialog>
  )
}
