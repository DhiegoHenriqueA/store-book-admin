import { defineStore } from "pinia";
import axios from "axios";

export const useCategoryStore = defineStore({
  id: "category",
  state: () => ({
    categories: [],
  }),

  actions: {
    async getAllCategories() {
      try {
        const { data } = await axios.get("http://localhost:4000/categories");
        this.categories = data;
        return Promise.resolve();
      } catch (e) {
        console.error(e);
        if (e.response.status === 404)
          return Promise.reject(e.response.statusText);
        return Promise.reject("Erro desconhecido ao consultar 'Catgory'");
      }
    },
    async createCategory(category: object) {
      try {
        const { data } = await axios.post(
          `http://localhost:4000/categories`,
          category
        );

        this.categories.push(data);

        return Promise.resolve(data);
      } catch (e) {
        console.error(e);

        return Promise.reject(e);
      }
    },
  },
});
