import { createApp } from 'vue'
import App from './App.vue'

import router from './router';
import { store, key } from './store'
import components from '@/components/index'

import 'vant/lib/index.css';
import 'vant/es/toast/style';
const app = createApp(App)


app.use(router)
app.use(store, key)
app.use(components)

app.mount('#app')
