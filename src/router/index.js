import { createRouter, createWebHistory } from 'vue-router';
import main from '../views/main.vue'
import { useStore } from 'vuex'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'main', component: main },
        { path: '/:id', name: 'user', component: () => import('../views/_user.vue') }
    ]
})

router.afterEach((to, from) => {
    const store = useStore()
    if (to.path === '/') {

        store.commit({
            type: 'searchUsers/SET_USER_NAME',
            value: 'Пользователь'
        })
    }
})

export default router