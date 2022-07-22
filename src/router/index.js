import {createRouter, createWebHistory} from 'vue-router'
import StartHome from '../views/StartHome'
import AddItem from '../views/AddItem'
import EditItem from '../views/EditItem'

const routes = [
    {
        path: '/',
        name: 'StartHome',
        component: StartHome
    },
    {
        path: '/add',
        name: 'AddItem',
        component: AddItem
    },
    {
        path: '/edit/:auctionId',
        name: 'EditItem',
        component: EditItem
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router