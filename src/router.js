import Vue from 'vue'
import VueRouter from "vue-router";
import ShowBlog from './components/ShowBlog.vue'
import AddBlog from './components/AddBlog.vue'
import SingleBlog from './components/SingleBlog.vue'
import EditBlog from './components/EditBlog.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        component: ShowBlog
    }, {
        path: '/display',
        component: ShowBlog
    }, {
        path: '/add',
        component: AddBlog
    }, {
        path: '/blog/:id',
        component: SingleBlog
    }, {
        path: '/edit/:id',
        component: EditBlog
    }]
})