import AboutPage from './pages/about.vue';
import BicicletaPage from './pages/bicicleta.vue';
import CascosPage from './pages/cascos.vue';
import DynamicRoutePage from './pages/dynamic-route.vue';
import HomePage from './pages/home.vue';
import NotFoundPage from './pages/not-found.vue';
import PanelLeftPage from './pages/panel-left.vue';
import PanelRightPage from './pages/panel-right.vue';

export default [{
        path: '/',
        component: HomePage,
    },
    {
        path: '/panel-left/',
        component: PanelLeftPage,
    },
    {
        path: '/panel-right/',
        component: PanelRightPage,
    },
    {
        path: '/about/',
        component: AboutPage,
    },
    {
        path: '/bicicleta/',
        component: BicicletaPage,
    },
    {
        path: '/cascos/',
        component: CascosPage,
    },
    {
        path: '/dynamic-route/blog/:blogId/post/:postId/',
        component: DynamicRoutePage,
    },
    {
        path: '(.*)',
        component: NotFoundPage,
    },
];