import { defineStore } from "pinia";
import axios from "axios";

export const useBookStore = defineStore({
  id: "book",
  state: () => ({
    books: [],
  }),

  actions: {
    async getAllBooks() {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/books?expand=category&expand=author&expand=editor"
        );
        this.books = data;
        return Promise.resolve();
      } catch (e) {
        console.error(e);
        if (e.response.status === 404)
          return Promise.reject(e.response.statusText);
        return Promise.reject("Erro desconhecido ao consultar 'Books'");
      }
    },
    async getBookById(id: number) {
      try {
        const { data } = await axios.get(
          `http://localhost:4000/books/${id}?expand=category&expand=author`
        );

        return Promise.resolve(data);
      } catch (e) {
        console.error(e);
        if (e.response.status === 404)
          return Promise.reject(e.response.statusText);
        return Promise.reject("Erro desconhecido ao consultar 'Livro'");
      }
    },
    async createBook(book: object) {
      try {
        const { data } = await axios.post(`http://localhost:4000/books`, book);

        await this.getAllBooks();
        return Promise.resolve(data);
      } catch (e) {
        console.error(e);

        return Promise.reject(e);
      }
    },
  },
});
