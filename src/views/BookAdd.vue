<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted, reactive } from "vue";
import { storeToRefs } from "pinia";
import { useBookStore } from "@/stores/book";
import { useCategoryStore } from "@/stores/category";
import { useAuthorStore } from "@/stores/author";
import { useEditorStore } from "@/stores/editor";

const bookStore = useBookStore();
const categoryStore = useCategoryStore();
const authorStore = useAuthorStore();
const editorStore = useEditorStore();

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

const createBook = async () => {
  await bookStore
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

onMounted(() => {
  categoryStore.getAllCategories();
  authorStore.getAllAuthor();
  editorStore.getAllEditor();
});
</script>

<template>
  <div class="q-pa-md" style="justify-content: center; display: flex">
    <div class="shadow-2 rounded-borders container">
      <div class="q-pa-md">
        <q-card-section>
          <div class="text-h6">Adicionar Livro</div>
          {{ book }}
        </q-card-section>
        <q-form @submit="createBook()" @reset="onReset" class="q-gutter-md">
          <q-input filled v-model="book.title" label="Titulo" />
          <q-input filled v-model="book.caption" label="Descrição" />

          <q-input filled v-model="book.amount" label="Valor" />
          <q-input filled v-model="book.img" label="Caminho da imagem" />
          <q-select
            map-options
            emit-value
            label="Selecione a categoria"
            v-model="book.categoryId"
            :options="categoryStore.categories"
            option-label="name"
            option-value="id"
          >
          </q-select>
          <q-select
            map-options
            emit-value
            label="Selecione o Autor"
            v-model="book.authorId"
            :options="authorStore.authors"
            option-label="name"
            option-value="id"
          >
          </q-select>
          <q-select
            map-options
            emit-value
            label="Selecione a Editora"
            v-model="book.editorId"
            :options="editorStore.editors"
            option-label="name"
            option-value="id"
          >
          </q-select>

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
