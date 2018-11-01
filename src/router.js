import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/home/Home.vue';
import About from './views/About.vue';
import City from './views/city/City.vue';
import Detail from './views/detail/Detail.vue';
Vue.use(Router);
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/about',
            name: 'about',
            component: About,
        },
        {
            path: '/city',
            name: 'city',
            component: City,
        },
        {
            path: '/detail/:id',
            name: 'detail',
            component: Detail,
        },
    ],
});
//# sourceMappingURL=router.js.map