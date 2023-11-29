import { create } from "zustand";
export const useAPIStore = create((set) => ({
  categoriesNav: [],
  addCategoriesNav: (newStuff) => {
    set((state) => {
      console.log("state", state);
      return { categoriesNav: [...state.categoriesNav, newStuff] };
    });
  },
}));
