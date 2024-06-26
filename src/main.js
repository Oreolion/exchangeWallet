import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "/src/routes";


const app = createApp(App)
app.use(router)
app.mount('#app')