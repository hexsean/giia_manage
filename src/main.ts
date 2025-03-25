import { createApp } from 'vue'
import { createPinia } from 'pinia';
import './assets/styles/style.css'
import App from './App.vue'
import router from './router';
import { initializeStores } from './stores';

const app = createApp(App);

app.use(router);
app.use(createPinia());

initializeStores()

app.mount('#app');
