import { createApp } from "vue";
import "./assets/primevue/base.css";
import "./assets/layout.css";
import "./style.css";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import router from "./router";
import { createPinia } from "pinia";
import ToastService from "primevue/toastservice";
import ConfirmationService from "primevue/confirmationservice";
import Theme from "@primeuix/themes/lara";

const app = createApp(App);
const pinia = createPinia();

app
  .use(PrimeVue, {
    theme: {
      preset: Theme,
      options: {
        darkModeSelector: ".app-dark",
      },
    },
  })
  .use(ToastService)
  .use(ConfirmationService)
  .use(router)
  .use(pinia);

app.mount("#app");
