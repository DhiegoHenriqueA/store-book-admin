import { defineStore } from "pinia";
import axios from "axios";

export const useEditorStore = defineStore({
  id: "editor",
  state: () => ({
    editors: [],
  }),

  actions: {
    async getAllEditor() {
      try {
        const { data } = await axios.get("http://localhost:4000/editors?");
        this.editors = data;
        return Promise.resolve();
      } catch (e) {
        console.error(e);
        if (e.response.status === 404)
          return Promise.reject(e.response.statusText);
        return Promise.reject("Erro desconhecido ao consultar 'editors'");
      }
    },

    async createEditor(editor: object) {
      try {
        console.log(editor);
        const { data } = await axios.post(
          `http://localhost:4000/editors`,
          editor
        );

        this.editors.push(data);

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
