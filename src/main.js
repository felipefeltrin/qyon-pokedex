import * as Vue from 'vue';
import App from './App.vue';
import router from './router'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faSearch);

const app = Vue.createApp(App)
app.use(router)
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount('#app')
