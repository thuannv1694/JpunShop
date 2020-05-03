import '../bootstrap'
import '../plugins'
import Vue from 'vue'
import store from './store'
import VueRouter from 'vue-router'
import SequentialEntrance from 'vue-sequential-entrance'
import 'vue-sequential-entrance/vue-sequential-entrance.css'

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
Vue.use(SequentialEntrance);

Vue.use(VueRouter)

window.Vue = Vue

import HomePage from '@/frontend/components/Home/page';
import HomeProduct from '@/frontend/components/Home/product';

Vue.prototype.$notification = notification
Vue.prototype.$message = Message
Vue.config.productionTip = false

let routes = [
    // { path: '/category', component: require('./components/Category/list/index.vue') },
    // { path: '/product', component: require('./components/Product/list/index.vue') },
]
const router = new VueRouter({
    mode: 'history',
    routes
})
const app = new Vue({
    el: '#app',
    router,
    components: {
        HomePage,
        HomeProduct,
        CuiFrontendHeader: () => import( /* webpackChunkName: "js/chunks/cui-frontend-header.chunk" */ '@/frontend/components/LayoutComponents/Frontend/Header/index.vue'),
        CuiFrontendFooter: () => import( /* webpackChunkName: "js/chunks/cui-frontend-footer.chunk" */ '@/frontend/components/LayoutComponents/Frontend/Footer/index.vue'),
    },
    store
})
