import { create } from "zustand";
export const useAPIStore = create((set) => ({
  categoriesNav: [],
  categoriesDisplayed: [],
  addCategoriesNav: (newStuff) => {
    set((state) => {
      console.log("state", state);
      return { categoriesNav: [...state.categoriesNav, newStuff] };
    });
  },
  setCategories: (newStuff) => {
    set((state) => {
      return {
        categoriesDisplayed: [...newStuff],
      };
    });
  },
}));
