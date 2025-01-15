<template>
  <div
    class="relative grid grid-cols-[6%_1fr] grid-rows-[3.5rem,1fr] gap-2 bg-[#f8f8f8] px-2"
  >
    <div
      class="col-span-2 flex items-center justify-between rounded-lg bg-white px-5 py-5 shadow-md"
    >
      Menu Global
    </div>

    <MenuSidebar @redirect="redirect" :options="options" :isHome="inicial" />

    <div class="grid grid-rows-[1fr,auto] gap-2">
      <div
        class="flex flex-col items-center rounded-lg bg-white p-4 shadow-md h-full"
      >
        <div class="h-[20rem]">
          <Vue3Lottie :animation-data="code" />
        </div>

        <h1
          class="h-24 text-6xl font-bold bg-gradient-to-r from-[#DBE465] to-[#6ab530] text-transparent bg-clip-text"
        >
          comerc-style-guide
        </h1>

        <div class="w-[50%] mb-5">
          <p class="text-lg text-gray-700 mt-4 text-center">
            O
            <span class="font-semibold text-gray-900">comerc-style-guide</span>
            é o ponto de referência definitivo para padronizar e elevar a
            identidade visual e comunicativa da empresa. Ele garante
            consistência e praticidade em todas as implementações.
          </p>
        </div>

        <button
          class="active:scale-90 bg-gradient-to-r from-[#DBE465] to-[#6ab530] text-white px-4 py-2 rounded-lg mt-4 w-[25%]"
        >
          Get Started
        </button>

        <div class="flex flex-col items-center mt-8 mb-5">
          <h2 class="font-bold mb-5">Colaboradores</h2>

          <div class="flex space-x-4">
            <div
              v-for="colaborador in collaborators"
              :key="colaborador.name"
              class="relative group"
            >
              <img
                :src="colaborador.img"
                :alt="colaborador.name"
                class="w-16 h-16 rounded-full border-2 border-gray-300 shadow-lg object-cover"
              />

              <div
                class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-10 bg-gray-800 text-white text-sm font-medium px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {{ colaborador.name }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterCe />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { IOptionsMenu } from "./utils/interface";
import MenuSidebar from "./webComponents/molecules/MenuSidebar/MenuSidebar.vue";
import FooterCe from "./webComponents/molecules/Footer/Footer.ce.vue";
import { Vue3Lottie } from "vue3-lottie";
import code from "./assets/code.json";
import dev1 from "./assets/dev1.png";
import dev2 from "./assets/dev2.png";
import dev3 from "./assets/dev3.png";
import dev4 from "./assets/dev4.png";
import components from "./assets/components.svg";
import {
  mdiHomeOutline,
  mdiDownloadBoxOutline,
  mdiFormatListBulleted,
  mdiSvg,
} from "@mdi/js";
const inicial = ref(false);

const redirect = (path: string) => {
  console.log("Redirect", path);
  inicial.value = false;
};

const collaborators = ref([
  { name: "Evandro", img: dev2 },
  {
    name: "Thallis",
    img: dev3,
  },
  { name: "Leonardo", img: dev1 },
  { name: "Kallif", img: dev4 },
]);

const options = ref<IOptionsMenu[]>([
  { text: "Inicio", path: "/", icon: mdiHomeOutline, svg: false, subMenu: [] },
  {
    text: "Instalação",
    path: "/about",
    icon: mdiDownloadBoxOutline,
    svg: false,
    subMenu: [],
  },
  {
    text: "Componentes",
    path: "/contact",
    icon: components,
    svg: true,
    subMenu: [
      { text: "Menu Sidebar", path: "/menu-sidebar" },
      { text: "Botões", path: "/botoes" },
    ],
  },
  {
    text: "Icones",
    path: "/icones",
    icon: mdiFormatListBulleted,
    svg: false,
    subMenu: [],
  },
  {
    text: "Svg",
    path: "/svg",
    icon: mdiSvg,
    svg: false,
    subMenu: [],
  },
]);
</script>
