"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, ProductVariant, MealPlate, PRODUCTS, MEAL_PLATES, CUSTOMER_MEMORIES, CustomerMemory } from "@/data/catalog";

export interface PlateItem {
  product: Product;
  variant: ProductVariant;
  quantity: number;
}

export interface CustomSubscriptionItem {
  product: Product;
  variant: ProductVariant;
  quantity: number;
}

interface KhaadyamContextType {
  // Plate (Cart)
  plateItems: PlateItem[];
  addToPlate: (product: Product, variant?: ProductVariant, quantity?: number) => void;
  removeFromPlate: (productId: string, variantId: string) => void;
  updateQuantity: (productId: string, variantId: string, quantity: number) => void;
  clearPlate: () => void;
  plateSubtotal: number;
  plateItemCount: number;
  deliveryFee: number;
  plateTotal: number;
  boxNote: string;
  setBoxNote: (note: string) => void;
  isPlateOpen: boolean;
  setIsPlateOpen: (open: boolean) => void;
  addMealToPlate: (meal: MealPlate) => void;

  // Shop Door ('meal' | 'category')
  shopDoor: "meal" | "category";
  setShopDoor: (door: "meal" | "category") => void;

  // Language ('en' | 'kn')
  lang: "en" | "kn";
  setLang: (lang: "en" | "kn") => void;

  // Active Product Modal
  activeProductModal: Product | null;
  setActiveProductModal: (prod: Product | null) => void;

  // Subscription Builder
  customList: CustomSubscriptionItem[];
  addToCustomList: (product: Product, variant: ProductVariant) => void;
  removeFromCustomList: (productId: string, variantId: string) => void;
  updateCustomListQuantity: (productId: string, variantId: string, delta: number) => void;
  updateCustomListItemVariant: (productId: string, oldVariantId: string, newVariant: ProductVariant) => void;
  subscriptionTenure: 6 | 9 | 12;
  setSubscriptionTenure: (tenure: 6 | 9 | 12) => void;
  dispatchDay: 5 | 15 | 25;
  setDispatchDay: (day: 5 | 15 | 25) => void;
  monthlyAmount: number;

  // Memory Wall
  memories: CustomerMemory[];
  addMemory: (quote: string, author: string, city: string) => void;

  // UPI Payment Modal State
  isUpiModalOpen: boolean;
  setIsUpiModalOpen: (open: boolean) => void;
}

const KhaadyamContext = createContext<KhaadyamContextType | undefined>(undefined);

export function KhaadyamProvider({ children }: { children: React.ReactNode }) {
  // Plate State
  const [plateItems, setPlateItems] = useState<PlateItem[]>([]);
  const [boxNote, setBoxNote] = useState<string>("");
  const [isPlateOpen, setIsPlateOpen] = useState<boolean>(false);
  const [isUpiModalOpen, setIsUpiModalOpen] = useState<boolean>(false);

  // Shop Door Preference - persisted on client
  const [shopDoor, setShopDoorState] = useState<"meal" | "category">("meal");

  // Language
  const [lang, setLang] = useState<"en" | "kn">("en");

  // Product Modal
  const [activeProductModal, setActiveProductModal] = useState<Product | null>(null);

  // Subscription Custom List
  const [customList, setCustomList] = useState<CustomSubscriptionItem[]>([
    {
      product: PRODUCTS[0], // Gurellu Chutney Pudi
      variant: PRODUCTS[0].variants[1], // 250 g
      quantity: 2,
    },
    {
      product: PRODUCTS[1], // Shenga Chutney Pudi
      variant: PRODUCTS[1].variants[1], // 250 g
      quantity: 1,
    },
    {
      product: PRODUCTS[3], // Mavina Gojju
      variant: PRODUCTS[3].variants[1], // 250 g
      quantity: 1,
    },
  ]);
  const [subscriptionTenure, setSubscriptionTenure] = useState<6 | 9 | 12>(12);
  const [dispatchDay, setDispatchDay] = useState<5 | 15 | 25>(5);

  // Memory Wall
  const [memories, setMemories] = useState<CustomerMemory[]>(CUSTOMER_MEMORIES);

  // Load persisted door choice from localStorage on mount
  useEffect(() => {
    try {
      const savedDoor = localStorage.getItem("khaadyam_shop_door");
      if (savedDoor === "meal" || savedDoor === "category") {
        setShopDoorState(savedDoor);
      }
    } catch {
      // Ignore if localStorage unavailable
    }
  }, []);

  const setShopDoor = (door: "meal" | "category") => {
    setShopDoorState(door);
    try {
      localStorage.setItem("khaadyam_shop_door", door);
    } catch {
      // Ignore
    }
  };

  // Plate actions
  const addToPlate = (product: Product, variant?: ProductVariant, quantity = 1) => {
    const selectedVariant = variant || product.variants[0];
    setPlateItems((prev) => {
      const existing = prev.find(
        (item) => item.product.id === product.id && item.variant.id === selectedVariant.id
      );
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id && item.variant.id === selectedVariant.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, variant: selectedVariant, quantity }];
    });
    setIsPlateOpen(true);
  };

  const addMealToPlate = (meal: MealPlate) => {
    // Add all included products to the plate at 250g or default variant
    const itemsToAdd: PlateItem[] = [];
    meal.includedProductIds.forEach((pid) => {
      const prod = PRODUCTS.find((p) => p.id === pid);
      if (prod) {
        const variant = prod.variants[1] || prod.variants[0];
        itemsToAdd.push({ product: prod, variant, quantity: 1 });
      }
    });

    setPlateItems((prev) => {
      const next = [...prev];
      itemsToAdd.forEach((newItem) => {
        const existingIdx = next.findIndex(
          (i) => i.product.id === newItem.product.id && i.variant.id === newItem.variant.id
        );
        if (existingIdx > -1) {
          next[existingIdx].quantity += 1;
        } else {
          next.push(newItem);
        }
      });
      return next;
    });
    setIsPlateOpen(true);
  };

  const removeFromPlate = (productId: string, variantId: string) => {
    setPlateItems((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && item.variant.id === variantId)
      )
    );
  };

  const updateQuantity = (productId: string, variantId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromPlate(productId, variantId);
      return;
    }
    setPlateItems((prev) =>
      prev.map((item) =>
        item.product.id === productId && item.variant.id === variantId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearPlate = () => setPlateItems([]);

  // Calculations
  const plateSubtotal = plateItems.reduce(
    (sum, item) => sum + item.variant.price * item.quantity,
    0
  );
  const plateItemCount = plateItems.reduce((sum, item) => sum + item.quantity, 0);
  const deliveryFee = plateSubtotal === 0 ? 0 : plateSubtotal >= 500 ? 0 : 49;
  const plateTotal = plateSubtotal + deliveryFee;

  // Custom Subscription actions
  const addToCustomList = (product: Product, variant: ProductVariant) => {
    setCustomList((prev) => {
      const existing = prev.find(
        (item) => item.product.id === product.id && item.variant.id === variant.id
      );
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id && item.variant.id === variant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, variant, quantity: 1 }];
    });
  };

  const removeFromCustomList = (productId: string, variantId: string) => {
    setCustomList((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && item.variant.id === variantId)
      )
    );
  };

  const updateCustomListQuantity = (productId: string, variantId: string, delta: number) => {
    setCustomList((prev) => {
      return prev
        .map((item) => {
          if (item.product.id === productId && item.variant.id === variantId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CustomSubscriptionItem[];
    });
  };

  const updateCustomListItemVariant = (
    productId: string,
    oldVariantId: string,
    newVariant: ProductVariant
  ) => {
    setCustomList((prev) => {
      const current = prev.find(
        (i) => i.product.id === productId && i.variant.id === oldVariantId
      );
      if (!current) return prev;

      // Check if new variant is already in list
      const existing = prev.find(
        (i) => i.product.id === productId && i.variant.id === newVariant.id
      );

      if (existing && existing.variant.id !== oldVariantId) {
        return prev
          .filter(
            (i) => !(i.product.id === productId && i.variant.id === oldVariantId)
          )
          .map((i) =>
            i.product.id === productId && i.variant.id === newVariant.id
              ? { ...i, quantity: i.quantity + current.quantity }
              : i
          );
      }

      return prev.map((i) =>
        i.product.id === productId && i.variant.id === oldVariantId
          ? { ...i, variant: newVariant }
          : i
      );
    });
  };

  const rawMonthlyTotal = customList.reduce(
    (sum, item) => sum + item.variant.price * item.quantity,
    0
  );

  // Tenure savings: 6 months = full price, 9 months = 5% off, 12 months = 10% off
  const tenureDiscount =
    subscriptionTenure === 12 ? 0.1 : subscriptionTenure === 9 ? 0.05 : 0;
  const monthlyAmount = Math.round(rawMonthlyTotal * (1 - tenureDiscount));

  // Memory Wall
  const addMemory = (quote: string, author: string, city: string) => {
    const newEntry: CustomerMemory = {
      id: `mem-${Date.now()}`,
      quote,
      author,
      city,
      relation: "Grandparent's dining table",
    };
    setMemories((prev) => [newEntry, ...prev]);
  };

  return (
    <KhaadyamContext.Provider
      value={{
        plateItems,
        addToPlate,
        removeFromPlate,
        updateQuantity,
        clearPlate,
        plateSubtotal,
        plateItemCount,
        deliveryFee,
        plateTotal,
        boxNote,
        setBoxNote,
        isPlateOpen,
        setIsPlateOpen,
        addMealToPlate,
        shopDoor,
        setShopDoor,
        lang,
        setLang,
        activeProductModal,
        setActiveProductModal,
        customList,
        addToCustomList,
        removeFromCustomList,
        updateCustomListQuantity,
        updateCustomListItemVariant,
        subscriptionTenure,
        setSubscriptionTenure,
        dispatchDay,
        setDispatchDay,
        monthlyAmount,
        memories,
        addMemory,
        isUpiModalOpen,
        setIsUpiModalOpen,
      }}
    >
      {children}
    </KhaadyamContext.Provider>
  );
}

export function useKhaadyam() {
  const context = useContext(KhaadyamContext);
  if (!context) {
    throw new Error("useKhaadyam must be used within a KhaadyamProvider");
  }
  return context;
}
