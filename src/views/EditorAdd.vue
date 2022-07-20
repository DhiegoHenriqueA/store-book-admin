<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted, reactive } from "vue";
import { storeToRefs } from "pinia";
import { useEditorStore } from "@/stores/editor";

const editorStore = useEditorStore();

const router = useRouter();

const editor = ref({
  name: "",
  socialReason: "",
});

const createEditor = () => {
  editorStore
    .createEditor(editor.value)
    .then((data) => {
      router.push({
        name: "editors",
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
          <div class="text-h6">Adicionar Editora</div>
        </q-card-section>
        <q-form @submit="createEditor()" @reset="onReset" class="q-gutter-md">
          <q-input filled v-model="editor.name" label="Nome" />

          <q-input filled v-model="editor.socialReason" label="Razao Social" />
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
