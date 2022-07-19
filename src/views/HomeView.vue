<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useBookStore } from "@/stores/book";

const booksStore = useBookStore();

onMounted(() => {
  booksStore.getAllBooks();
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

        <q-markup-table>
          <thead>
            <tr class="shadow-2 rounded-borders">
              <th class="text-left">Capa</th>
              <th class="text-center">Titulo</th>
              <th class="text-center">Avaliação</th>
              <th class="text-right">Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr class="shadow-2 rounded-borders" style="height: 60px">
              <td class="text-left">
                <q-card>
                  <q-img src="src/assets/imgs/books/O-Nome-do-Vento.jpg" />
                </q-card>
              </td>
              <td class="text-center"><b>Titulo</b></td>
              <td class="text-center">
                <q-rating
                  v-model="text"
                  max="5"
                  size="1.5em"
                  color="yellow"
                  icon="star_border"
                  icon-selected="star"
                  icon-half="star_half"
                  readonly
                  no-dimming
                />
              </td>
              <td class="text-right">24</td>
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
