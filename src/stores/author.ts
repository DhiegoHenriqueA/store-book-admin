import { defineStore } from "pinia";
import axios from "axios";

export const useAuthorStore = defineStore({
  id: "author",
  state: () => ({
    authors: [],
  }),

  actions: {
    async getAllAuthor() {
      try {
        const { data } = await axios.get("http://localhost:4000/authors?");
        this.authors = data;
        return Promise.resolve();
      } catch (e) {
        console.error(e);
        if (e.response.status === 404)
          return Promise.reject(e.response.statusText);
        return Promise.reject("Erro desconhecido ao consultar 'authors'");
      }
    },

    async createAuthor(author: object) {
      try {
        console.log(author);
        const { data } = await axios.post(
          `http://localhost:4000/authors`,
          author
        );

        this.authors.push(data);

        return Promise.resolve(data);
      } catch (e) {
        console.error(e);
        if (e.response.status === 404)
          return Promise.reject(e.response.statusText);
        return Promise.reject("Erro desconhecido ao consultar 'Livro'");
      }
    },
  },
});
