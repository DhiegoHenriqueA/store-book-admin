<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted, reactive } from "vue";
import { storeToRefs } from "pinia";
import { useAuthorStore } from "@/stores/author";

const authorStore = useAuthorStore();

const router = useRouter();

const author = ref({
  name: "",
});

const createAuthor = () => {
  authorStore
    .createAuthor(author.value)
    .then((data) => {
      router.push({
        name: "authors",
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
          <div class="text-h6">Adicionar Autor</div>
        </q-card-section>
        <q-form @submit="createAuthor()" @reset="onReset" class="q-gutter-md">
          <q-input filled v-model="author.name" label="Nome" />

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
