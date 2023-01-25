import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import { plugin, defaultConfig } from "@formkit/vue";

const app = createApp(App);

app.use(router);

app.use(plugin, defaultConfig);

app.mount("#app");

