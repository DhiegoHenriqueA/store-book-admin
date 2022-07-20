import { createRouter, createWebHistory } from "vue-router";

import { useUserStore } from "@/stores/user";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "",
      component: () => import("@/layouts/MainLayout.vue"),
      children: [
        {
          path: "",
          name: "home",
          component: () => import("@/views/HomeView.vue"),
        },
        {
          path: "livros",
          name: "books",
          component: () => import("@/views/BooksView.vue"),
        },
        {
          path: "livroAdd",
          name: "bookAdd",
          component: () => import("@/views/BookAdd.vue"),
        },
        {
          path: "editoras",
          name: "editors",
          component: () => import("@/views/EditorsView.vue"),
        },
        {
          path: "editoraAdd",
          name: "editorAdd",
          component: () => import("@/views/EditorAdd.vue"),
        },
        {
          path: "categorias",
          name: "categories",
          component: () => import("@/views/CategoriesView.vue"),
        },
        {
          path: "categoriaAdd",
          name: "categoryAdd",
          component: () => import("@/views/CategoryAdd.vue"),
        },
        {
          path: "autores",
          name: "authors",
          component: () => import("@/views/AuthorsView.vue"),
        },
        {
          path: "autorAdd",
          name: "authorAdd",
          component: () => import("@/views/AuthorAdd.vue"),
        },
      ],
    },
    {
      path: "/login",
      name: "login",

      component: () => import("@/views/LoginView.vue"),
    },
    {
      path: "/registration",
      name: "registration",

      component: () => import("@/views/RegistrationView.vue"),
    },
  ],
});

router.beforeEach(async (to, from) => {
  const userStore = useUserStore();

  if (
    // make sure the user is authenticated
    !userStore.loggedIn &&
    // ❗️ Avoid an infinite redirect
    to.name !== "login"
  ) {
    // redirect the user to the login page
    return { name: "login" };
  }
});

export default router;
