import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt' // mitt 라이브러리 셋팅
let emitter = mitt();
let app = createApp(App)
app.config.globalProperties.emitter = emitter;

app.mount('#app')
