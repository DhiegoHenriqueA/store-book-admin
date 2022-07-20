<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useCategoryStore } from "@/stores/category";

const categoryStore = useCategoryStore();
const router = useRouter();

const category = ref({
  name: "",
  description: "",
});

const createCategory = () => {
  categoryStore
    .createCategory(category.value)
    .then((data) => {
      router.push({
        name: "categories",
      });
    })
    .catch((error) => {
      alert(error);
    });
};
</script>

<template>
  <div class="q-pa-md" style="justify-content: center; display: flex">
    <div class="shadow-2 rounded-borders container">
      <div class="q-pa-md">
        <q-card-section>
          <div class="text-h6">Adicionar Categoria</div>
        </q-card-section>
        <q-form @submit="createCategory()" @reset="onReset" class="q-gutter-md">
          <q-input filled v-model="category.name" label="Nome" />

          <q-input filled v-model="category.description" label="Descrição" />
          <div class="row justify-end">
            <q-btn label="Salvar" color="primary" type="submit" />
          </div>
        </q-form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 50%;
}
</style>
