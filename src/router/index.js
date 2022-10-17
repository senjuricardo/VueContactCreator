import {createRouter, createWebHistory} from 'vue-router'

const routes= [
    {path: '/',name: "Main", component: ()=> import('../views/Listagem.vue')},
    // {path: '/list',name: "FormList", component: ()=> import('../components/Users.vue')},
    // {path: '/myself/:firstname/:lastname/:age/:gender',name: "OneUser", component: ()=> import('../components/oneUser.vue')}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router