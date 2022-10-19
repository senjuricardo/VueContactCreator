import {createRouter, createWebHistory} from 'vue-router'

const routes= [
    {path: '/',name: "Main", component: ()=> import('../views/Listagem.vue')},
    {path: '/create',name: "Create", component: ()=> import('../views/CreateTodo.vue')},
    // {path: '/list',name: "FormList", component: ()=> import('../components/Users.vue')},
     {path: '/detail/:id',name: "Detail", component: ()=> import('../views/Detail.vue')}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router