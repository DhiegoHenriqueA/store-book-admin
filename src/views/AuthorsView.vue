<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useAuthorStore } from "@/stores/author";

const authorStore = useAuthorStore();

onMounted(() => {
  authorStore.getAllAuthor();
});
</script>

<template>
  <div class="q-pa-md" style="justify-content: center; display: flex">
    <div class="shadow-2 rounded-borders container">
      <div class="q-pa-md">
        <q-card-section>
          <div class="text-h6">Autores</div>
          <div class="row justify-end">
            <q-btn
              type="submit"
              label="Adicionar"
              class="q-mt-md"
              color="teal"
              :to="{ name: 'authorAdd' }"
            ></q-btn>
          </div>
        </q-card-section>

        <q-markup-table>
          <thead>
            <tr class="shadow-2 rounded-borders">
              <th class="text-left">ID</th>
              <th class="text-left">Nome</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="shadow-2 rounded-borders"
              v-for="author in authorStore.authors"
              v-bind:key="author"
            >
              <td>
                {{ author.id }}
              </td>
              <td>
                {{ author.name }}
              </td>
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
