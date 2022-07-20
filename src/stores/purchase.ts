import { defineStore } from "pinia";
import axios from "axios";
import { useBookStore } from "./book";
import { useLocalStorage } from "@vueuse/core";

const bookStore = useBookStore();

export const usePurchaseStore = defineStore({
  id: "purchase",
  state: () => ({
    finishedPurchases: [],
  }),

  actions: {
    async getFinishedPurchases() {
      try {
        const { data } = await axios.get(
          `http://localhost:4000/purchases?embed=purchasesItems&status=Realizado`
        );

        console.log(data);

        if (data.length && data.length > 0) {
          for (let iPurchase in data) {
            data[iPurchase].totalItens = 0;
            for (const iTem in data[iPurchase].purchasesItems) {
              data[iPurchase].totalItens +=
                data[iPurchase].purchasesItems[iTem].quantity;
              console.log("book", data[iPurchase].purchasesItems[iTem].bookId);
              data[iPurchase].purchasesItems[iTem].book =
                await bookStore.getBookById(
                  data[iPurchase].purchasesItems[iTem].bookId
                );
            }
          }
        }
        this.finishedPurchases = data;

        return Promise.resolve();
      } catch (e) {
        console.error(e);

        if (e.response.status === 404)
          return Promise.reject(e.response.statusText);
        return Promise.reject("Erro desconhecido ao consultar 'Compras'");
      }
    },
    async getPurchaseById(id: number) {
      try {
        const { data } = await axios.get(
          `http://localhost:4000/purchases/${id}?embed=purchasesItems`
        );
        if (data) {
          for (const i in data.purchasesItems) {
            data.purchasesItems[i].book = await bookStore.getBookById(
              data.purchasesItems[i].bookId
            );
          }
        }

        this.currentPurchase = data;

        return Promise.resolve(data);
      } catch (e) {
        console.error(e);
        if (e.response.status === 404)
          return Promise.reject(e.response.statusText);
        return Promise.reject("Erro desconhecido ao consultar 'Compra'");
      }
    },
  },
});
