"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { InquiryItem, Product } from "@/types";

interface InquiryStore {
  items: InquiryItem[];
  addItem: (product: Product, quantity: number, unit: string, notes?: string) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  updateNotes: (productId: string, notes: string) => void;
  clearCart: () => void;
  getItemCount: () => number;
  getTotalItems: () => number;
}

export const useInquiryStore = create<InquiryStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product, quantity, unit, notes) => {
        const items = get().items;
        const existing = items.find((i) => i.productId === product.id);

        if (existing) {
          set({
            items: items.map((i) =>
              i.productId === product.id
                ? { ...i, quantity: i.quantity + quantity, notes: notes || i.notes }
                : i
            ),
          });
        } else {
          set({
            items: [
              ...items,
              { productId: product.id, product, quantity, unit, notes },
            ],
          });
        }
      },

      removeItem: (productId) => {
        set({ items: get().items.filter((i) => i.productId !== productId) });
      },

      updateQuantity: (productId, quantity) => {
        set({
          items: get().items.map((i) =>
            i.productId === productId ? { ...i, quantity } : i
          ),
        });
      },

      updateNotes: (productId, notes) => {
        set({
          items: get().items.map((i) =>
            i.productId === productId ? { ...i, notes } : i
          ),
        });
      },

      clearCart: () => set({ items: [] }),

      getItemCount: () => get().items.length,

      getTotalItems: () =>
        get().items.reduce((total, item) => total + item.quantity, 0),
    }),
    {
      name: "uturn-b2b-inquiry-cart",
    }
  )
);
