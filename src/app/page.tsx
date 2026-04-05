"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/layout/Header"
import { ProductList } from "@/components/products/ProductList"
import { ProductDialog } from "@/components/products/ProductDialog"
import { Product, useProductStore } from "@/store/useProductStore"
import { ProductFormValues } from "@/components/products/ProductForm"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { toast } from "sonner"

export default function Home() {
  const [isMounted, setIsMounted] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  
  const { addProduct, updateProduct, deleteProduct } = useProductStore()

  // Prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleOpenAddDialog = () => {
    setEditingProduct(null)
    setDialogOpen(true)
  }

  const handleOpenEditDialog = (product: Product) => {
    setEditingProduct(product)
    setDialogOpen(true)
  }

  const handleDelete = (id: string) => {
    deleteProduct(id)
    toast.success("Product deleted successfully")
  }

  const handleSubmit = (data: ProductFormValues) => {
    if (editingProduct) {
      updateProduct(editingProduct.id, data)
      toast.success("Product updated successfully")
    } else {
      addProduct(data)
      toast.success("Product added successfully")
    }
  }

  // Display a loading placeholder or nothing during SSR
  if (!isMounted) {
    return null
  }

  return (
    <main className="flex-1 bg-background/50">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-8 py-8 space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Inventory</h1>
            <p className="text-muted-foreground mt-1">
              Manage your products locally. Changes are saved automatically.
            </p>
          </div>
          
          <Button onClick={handleOpenAddDialog} className="shadow-md hover:shadow-lg transition-all rounded-full px-6">
            <Plus className="mr-2 h-4 w-4" /> Add Product
          </Button>
        </div>

        <ProductList 
          onEdit={handleOpenEditDialog} 
          onDelete={handleDelete} 
        />
      </div>

      <ProductDialog 
        open={dialogOpen} 
        onOpenChange={setDialogOpen} 
        product={editingProduct}
        onSubmit={handleSubmit}
      />
    </main>
  )
}
