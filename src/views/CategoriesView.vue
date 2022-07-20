<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useCategoryStore } from "@/stores/category";

const categoryStore = useCategoryStore();

onMounted(() => {
  categoryStore.getAllCategories();
});
</script>

<template>
  <div class="q-pa-md" style="justify-content: center; display: flex">
    <div class="shadow-2 rounded-borders container">
      <div class="q-pa-md">
        <q-card-section>
          <div class="text-h6">Categorias</div>
          <div class="row justify-end">
            <q-btn
              type="submit"
              label="Adicionar"
              class="q-mt-md"
              color="teal"
              :to="{ name: 'categoryAdd' }"
            ></q-btn>
          </div>
        </q-card-section>

        <q-markup-table>
          <thead>
            <tr class="shadow-2 rounded-borders">
              <th class="text-left">ID</th>
              <th class="text-left">Nome</th>
              <th class="text-left">Descricao</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="shadow-2 rounded-borders"
              v-for="category in categoryStore.categories"
              v-bind:key="category"
            >
              <td>{{ category.id }}</td>

              <td>
                {{ category.name }}
              </td>
              <td>{{ category.description }}</td>
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
