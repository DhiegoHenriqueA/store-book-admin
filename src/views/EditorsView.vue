<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useEditorStore } from "@/stores/editor";

const editorStore = useEditorStore();

onMounted(() => {
  editorStore.getAllEditor();
});
</script>

<template>
  <div class="q-pa-md" style="justify-content: center; display: flex">
    <div class="shadow-2 rounded-borders container">
      <div class="q-pa-md">
        <q-card-section>
          <div class="text-h6">Editoras</div>
          <div class="row justify-end">
            <q-btn
              type="submit"
              label="Adicionar"
              class="q-mt-md"
              color="teal"
              :to="{ name: 'editorAdd' }"
            ></q-btn>
          </div>
        </q-card-section>

        <q-markup-table>
          <thead>
            <tr class="shadow-2 rounded-borders">
              <th class="text-left">ID</th>
              <th class="text-left">Nome</th>
              <th class="text-left">Razao Social</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="shadow-2 rounded-borders"
              v-for="editor in editorStore.editors"
              v-bind:key="editor"
            >
              <td>
                {{ editor.id }}
              </td>
              <td>
                {{ editor.name }}
              </td>
              <td>{{ editor.socialReason }}</td>
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
