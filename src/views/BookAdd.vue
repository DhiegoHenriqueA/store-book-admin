<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted, reactive } from "vue";
import { storeToRefs } from "pinia";
import { useBookStore } from "@/stores/book";

const bookStore = useBookStore();

const router = useRouter();

const book = ref({
  title: "",
  caption: "",
  amount: "",
  img: "",
  chip: "",
  chip_color: "",
  chip_class: "",
  categoryId: "",
  authorId: "",
  editorId: "",
});

const createBook = () => {
  bookStore
    .createBook(book.value)
    .then((data) => {
      router.push({
        name: "books",
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
          <div class="text-h6">Adicionar Livro</div>
        </q-card-section>
        <q-form @submit="createBook()" @reset="onReset" class="q-gutter-md">
          <q-input filled v-model="book.title" label="Titulo" />
          <q-input filled v-model="book.caption" label="Descrição" />

          <q-input filled v-model="book.amount" label="Valor" />
          <q-input filled v-model="book.img" label="Caminho da imagem" />
          <q-input filled v-model="book.categoryId" label="Autor" />
          <q-input filled v-model="book.authorId" label="Autor" />
          <q-input filled v-model="book.editorId" label="Editora" />

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
