import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

Vue.use(Router)

const Login = () => import('../views/login/Login')
const Dashboard = () => import('../views/dashboard/Dashboard')
const Forgetpwd = () => import('../views/forgotpwd/Forgotpassword')

export const router = new Router({
    mode: 'hash', // https://router.vuejs.org/api/#mode
    linkActiveClass: 'active',
    scrollBehavior: () => ({ y: 0 }),
    routes: configRoutes()
})

function configRoutes() {
    return [
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
            beforeEnter: (to, from, next) => {
                if (store.state.auth.authenticated == true) {
                    next(); 
                } else {
                    next(false);
                }
            }
        },
        {
            path: '/forgetpwd',
            component: Forgetpwd
        },
        {
            path: '/',
            redirect: {
                name: 'login'
            }
        },
        {
            path: '*',
            component: Login
        }
    ]
}