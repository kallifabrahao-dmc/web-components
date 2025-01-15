import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "@comerc-teste/comerc-style-guide";
import PrimeVue from "primevue/config";

createApp(App).use(PrimeVue).mount("#app");
