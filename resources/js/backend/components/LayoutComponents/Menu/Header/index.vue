<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
      <div class="logo">
        <img src="/img/backend/brand/logo.svg" style="height: 32px; padding: 2px 0px 2px 33px">
      </div>
      <a-menu theme="dark" mode="inline" @click="handleClick" :selectedKeys="selectedKeys" v-model="current">
        <a-menu-item :key="'category'">
           <a href="/admin/category">
            <a-icon type="setting" />
              <span>Category</span>
          </a>
        </a-menu-item>
        <a-menu-item :key="'product'">
          <a href="/admin/product">
            <a-icon type="setting" />
              <span>Products</span>
          </a>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="upload" />
          <span>nav 3</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <cui-profile-menu :user="user"/>  
      </a-layout-header>
      <a-layout-content>
        <slot></slot>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
  import { Menu, Icon } from 'ant-design-vue'
  import CuiProfileMenu from './ProfileMenu'
  window.Vue.use(Menu)
  window.Vue.use(Icon)

  export default {
    name: 'menu-header',
    components: {CuiProfileMenu},
    props: {
        user: Object,
        collapsed: false,
    },
    data() {
      return {
        selectedKeys: [],
        current: ['home'],
        currentLocation: location.pathname
      }
    },
    methods: {
      handleClick(e) {
      },
      getCurrentActiveMenu() {
        if (this.currentLocation == '/admin') {
          this.current = ['home'];
        }
        if (this.currentLocation.includes('category')) {
          this.current = ['category'];
        }
        if (this.currentLocation.includes('product')) {
          this.current = ['product'];
        }
      }
    },
    created() {
      this.getCurrentActiveMenu();
    },
  }
</script>

<style>
  #components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }

  #components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: #fff;
    margin: 16px;
  }
</style>
