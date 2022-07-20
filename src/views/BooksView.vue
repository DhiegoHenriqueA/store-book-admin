<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useBookStore } from "@/stores/book";

const bookStore = useBookStore();

onMounted(async () => {
  await bookStore.getAllBooks();
});
</script>

<template>
  <div class="q-pa-md" style="justify-content: center; display: flex">
    <div class="shadow-2 rounded-borders container">
      <div class="q-pa-md">
        <q-card-section>
          <div class="text-h6">Livros Anunciados</div>
          <div class="text-subtitle3">Fiinalizadas</div>
          <div class="row justify-end">
            <q-btn
              type="submit"
              label="Adicionar"
              class="q-mt-md"
              color="teal"
              :to="{ name: 'bookAdd' }"
            ></q-btn>
          </div>
        </q-card-section>

        <q-markup-table>
          <thead>
            <tr class="shadow-2 rounded-borders">
              <th>Id</th>
              <th>Titulo</th>
              <th>Categoria</th>
              <th>Editora</th>
              <th>Autor</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="shadow-2 rounded-borders"
              v-for="book in bookStore.books"
            >
              <td class="text-center">{{ book.id }}</td>
              <td class="text-center">
                {{ book.title }}
              </td>
              <td class="text-center">{{ book.category.name }}</td>
              <td class="text-center">{{ book.editor.name }}</td>
              <td class="text-center">{{ book.author.name }}</td>

              <td class="text-center">{{ book.amount }}</td>
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
