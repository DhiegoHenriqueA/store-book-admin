<template>
  <q-layout
    view="hHh Lpr lff"
    container
    style="height: 100vh"
    class="shadow-2 rounded-borders"
  >
    <q-header elevated class="bg-black">
      <q-toolbar>
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        <q-toolbar-title>SotreBook Admin</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above
      :width="200"
      :breakpoint="500"
      bordered
      class="bg-grey-3"
    >
      <q-scroll-area class="fit">
        <q-list>
          <template v-for="(menuItem, index) in menuList" :key="index">
            <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
            <q-separator :key="'sep' + index" v-if="menuItem.separator" />
          </template>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <q-page padding> <router-view /> </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

const menuList = [
  {
    icon: "shopping_cart",
    label: "Vendas",
    separator: true,
  },
  {
    icon: "menu_book",
    label: "Livros",
    separator: false,
  },
  {
    icon: "person_2",
    label: "Autores",
    separator: false,
  },
  {
    icon: "category",
    label: "Categorias",
    separator: false,
  },
  {
    icon: "maps_home_work",
    label: "Editoras",
    separator: false,
  },
];

export default {
  setup() {
    return {
      drawer: ref(false),
      menuList,
    };
  },
};
</script>
