import Vue from 'vue';
import VueSocket from 'vue-socket.io';
import App from './components/chat-app.vue';

Vue.use(VueSocket, 'http://localhost:8000');

new Vue(App).$mount('#app');