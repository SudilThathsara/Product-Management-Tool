import { useProductStore } from "@/store/useProductStore"
import { ProductCard } from "./ProductCard"
import { PackageX } from "lucide-react"

interface ProductListProps {
  onEdit: (product: any) => void;
  onDelete: (id: string) => void;
}

export function ProductList({ onEdit, onDelete }: ProductListProps) {
  const { products, searchQuery } = useProductStore()

  const filteredProducts = products.filter((product) => {
    if (!searchQuery) return true
    const lowerQuery = searchQuery.toLowerCase()
    return (
      product.name.toLowerCase().includes(lowerQuery) ||
      product.description.toLowerCase().includes(lowerQuery)
    )
  })

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center animate-in fade-in zoom-in duration-500">
        <div className="bg-muted w-24 h-24 rounded-full flex items-center justify-center mb-6">
          <PackageX className="w-12 h-12 text-muted-foreground" />
        </div>
        <h2 className="text-2xl font-bold tracking-tight mb-2">No products yet</h2>
        <p className="text-muted-foreground max-w-sm">
          Get started by adding your first product to the inventory. All data is securely stored on your device.
        </p>
      </div>
    )
  }

  if (filteredProducts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <h2 className="text-xl font-bold tracking-tight mb-2">No matching products</h2>
        <p className="text-muted-foreground">
          We couldn't find any products matching "{searchQuery}"
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-in fade-in duration-700">
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}
