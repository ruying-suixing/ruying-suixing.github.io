import { createApp } from "vue";
import App from "./App.vue";
import GLOBAL_CONFIG from "./config";
import "@/assets/css/index.scss";

const app = createApp(App);
// 挂载全局配置
app.config.globalProperties.$config = GLOBAL_CONFIG;

app.mount("#app");
