import { createApp } from "vue";
import "./assets/primevue/base.css";
import "./style.css";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import router from "./router";
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();

app
  .use(PrimeVue, {
    theme: "none",
  })
  .use(router)
  .use(pinia);

app.mount("#app");
