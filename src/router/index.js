import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {path:'/', name: 'accueil', component: () => import('../views/AccueilView.vue')},
    {path:'/articles', name: 'articles', component: () => import('../views/ArticlesView.vue')},
    {path:'/article/:id', name: 'articleDetail', component:() => import('../views/DetailArticleView.vue')},
    {path:'/ajouter', name:'ajouter', component:() => import('../views/AjouterView.vue')},
    {path:'/panier', name:'panier', component:() => import('../views/PanierView.vue')},
    {path:'/login', name:'login', component: () => import('../views/LoginView.vue')},
    {path:'/admin', name:'admin', component: () => import('../views/AdminView.vue')}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

let estCoGlobal = false

export function setEstCo(valeur) {
    estCoGlobal = valeur
}

router.beforeEach((to) => {
    if (to.path === '/admin' && !estCoGlobal) {
        return '/login'
    }
})

export default router