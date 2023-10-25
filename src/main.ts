import { createApp } from 'vue';
import './styles/style.css';
import App from './App.vue';
import { router, setupRouter } from '@/router';
import { setupStore } from './store';

const app = createApp(App);

async function bootstrap() {
  await setupRouter(app);
  await router.isReady();
  await setupStore(app);
  app.mount('#app');
}

bootstrap();
