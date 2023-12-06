import { ElButton } from "element-plus";
import "element-plus/es/components/button/style/index";
import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(router);

app.use(ElButton);

app.mount("#app");
