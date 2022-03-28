import Vue from 'vue';
import VueRouter from 'vue-router';
import landingPage from '@/views/landingPage.vue';
import newsDeskripsi from '@/views/newsDeskripsi.vue';

Vue.use(VueRouter);

const routes = [

    {
        path: '/',
        name: 'landingPage',
        component: landingPage,
    },
    {
        path: '/:id',
        name: 'newsDeskripsi',
        component: newsDeskripsi,
    }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})
export default router