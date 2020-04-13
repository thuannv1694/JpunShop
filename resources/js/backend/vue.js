import '../bootstrap'
import '../plugins'
import Vue from 'vue'
import store from './store'
import VueRouter from 'vue-router'


import {
    Avatar, TreeSelect, Rate, Breadcrumb, InputNumber, Steps, Skeleton,
    Upload, Button, Layout, Table, Icon, Progress, Radio, Dropdown, Menu,
    Carousel, Input, Calendar, Badge, Slider, Form, Tooltip, Select, Switch,
    Tag, Affix, Spin, Alert, Checkbox, Tabs, Pagination, notification, Drawer, List,
    Row, Col, Divider, Modal, Message, DatePicker, AutoComplete, Popconfirm
} from 'ant-design-vue'

Vue.use(Avatar)
Vue.use(Button)
Vue.use(Rate)
Vue.use(TreeSelect)
Vue.use(Breadcrumb)
Vue.use(Layout)
Vue.use(Table)
Vue.use(Icon)
Vue.use(Progress)
Vue.use(Radio)
Vue.use(Dropdown)
Vue.use(Menu)
Vue.use(Carousel)
Vue.use(Input)
Vue.use(Calendar)
Vue.use(Badge)
Vue.use(Slider)
Vue.use(Form)
Vue.use(Tooltip)
Vue.use(Select)
Vue.use(Tag)
Vue.use(Affix)
Vue.use(Spin)
Vue.use(Alert)
Vue.use(Checkbox)
Vue.use(Tabs)
Vue.use(Pagination)
Vue.use(Upload)
Vue.use(Message)
Vue.use(Steps)
Vue.use(InputNumber)
Vue.use(Drawer)
Vue.use(Switch)
Vue.use(notification)
Vue.use(List)
Vue.use(Row)
Vue.use(Col)
Vue.use(Divider)
Vue.use(Modal)
Vue.use(DatePicker)
Vue.use(AutoComplete)
Vue.use(Popconfirm)
Vue.use(Skeleton)

Vue.use(VueRouter)

window.Vue = Vue

Vue.prototype.$notification = notification
Vue.prototype.$message = Message
Vue.config.productionTip = false

import CategoryList from '@/backend/components/Category/list';
import ProductList from '@/backend/components/Product/list';
import ProductDetailCreated from '@/backend/components/Product/detail/created';
import ProductDetailEdit from '@/backend/components/Product/detail/edit';

let routes = [
    // { path: '/dashboard', component: require('./components/Dashboard.vue') },
    // { path: '/developer', component: require('./components/Developer.vue') },
    // { path: '/users', component: require('./components/Users.vue') },
    // { path: '/profile', component: require('./components/Profile.vue') },
    { path: '/category', component: require('./components/Category/list/index.vue') },
    { path: '/product', component: require('./components/Product/list/index.vue') },
    // { path: '*', component: require('./components/NotFound.vue') }
]
const router = new VueRouter({
    mode: 'history',
    routes
})
const app = new Vue({
    el: '#app',
    router,
    components: {
        CategoryList,
        ProductList,
        ProductDetailCreated,
        ProductDetailEdit,
        CuiMenuHeader: () => import( /* webpackChunkName: "js/chunks/cui-menu-header.chunk" */ '@/backend/components/LayoutComponents/Menu/Header/index.vue'),
        CuiMenuLeft: () => import( /* webpackChunkName: "js/chunks/cui-menu-left.chunk" */ '@/backend/components/LayoutComponents/Menu/MenuLeft/index.vue'),
        
    },
    store
})
