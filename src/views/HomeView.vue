<script setup lang="ts">
import { ref, onMounted } from "vue";
import { usePurchaseStore } from "@/stores/purchase";

const purchaseStore = usePurchaseStore();

onMounted(() => {
  purchaseStore.getFinishedPurchases();
});
</script>

<template>
  <div class="q-pa-md" style="justify-content: center; display: flex">
    <div class="shadow-2 rounded-borders container">
      <div class="q-pa-md">
        <q-card-section>
          <div class="text-h6">Vendas</div>
          <div class="text-subtitle3">Fiinalizadas</div>
        </q-card-section>

        <q-markup-table
          v-for="purchase of purchaseStore.finishedPurchases"
          v-bind:key="purchase"
          class="q-ma-lg q-pa-md bg-grey-3"
        >
          <div class="text-h7 q-ma-md">Venda N.º {{ purchase.id }}</div>

          <tbody class="bg-grey-2">
            <tr class="shadow-2 rounded-borders">
              <th class="text-left">Id</th>
              <th>Capa</th>
              <th>Tituulo</th>
              <th>Quantidade</th>
            </tr>
            <tr
              v-for="book of purchase.purchasesItems"
              v-bind:key="book"
              class="shadow-2 rounded-borders"
              style="height: 50px"
            >
              <td>{{ book.id }}</td>
              <td style="width: 120px">
                <q-card style="height: 90px">
                  <q-img :src="book.img" />
                </q-card>
              </td>
              <td class="text-center">
                {{ book.book ? book.book.title : "" }}
              </td>
              <td class="text-center">
                {{ book.quantity }}
              </td>
            </tr>
            <tr class="shadow-1 rounded-borders">
              <th></th>
              <th></th>
              <th class="text-right">Qtd Total:</th>
              <th>{{ purchase.totalItens }}</th>
            </tr>
          </tbody>
        </q-markup-table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.my-card {
  width: 100%;
}

.container {
  background-color: rgb(255, 255, 255);
  width: 100%;
}
</style>
