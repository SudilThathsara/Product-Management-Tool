import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

interface ProductState {
  products: Product[];
  searchQuery: string;
  addProduct: (product: Omit<Product, 'id'>) => void;
  updateProduct: (id: string, updated: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  setSearchQuery: (query: string) => void;
}

export const useProductStore = create<ProductState>()(
  persist(
    (set) => ({
      products: [],
      searchQuery: '',
      addProduct: (product) => set((state) => ({
        products: [
          { ...product, id: crypto.randomUUID() },
          ...state.products,
        ]
      })),
      updateProduct: (id, updated) => set((state) => ({
        products: state.products.map(p => p.id === id ? { ...p, ...updated } : p)
      })),
      deleteProduct: (id) => set((state) => ({
        products: state.products.filter(p => p.id !== id)
      })),
      setSearchQuery: (query) => set({ searchQuery: query }),
    }),
    {
      name: 'product-storage',
      partialize: (state) => ({ products: state.products }), // Only persist products, not search query
    }
  )
);
