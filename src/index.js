import Vue from 'vue';
import App from './app.vue';
import './styles/global.styl';

const div=document.createElement('div');
document.body.appendChild(div);
new Vue({
	render:(h)=>h(App)
}).$mount(div);