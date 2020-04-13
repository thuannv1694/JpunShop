<template>
  <a-dropdown :trigger="['click']" placement="bottomLeft">
    <div :class="$style.dropdown">
      <a-avatar shape="square" icon="user" size="default" :class="$style.avatar"/>
    </div>
    <a-menu slot="overlay">
      <a-menu-item>
        <div>
          <strong>Hello : {{ user.full_name }}</strong>
        </div>
        <div>
          <strong class="mr-1">Role:</strong> {{ user.roles[0].name }}
        </div>
      </a-menu-item>
      <a-menu-divider/>
      <a-menu-item>
        <div>
          <strong class="mr-1">Email:</strong> {{ user.email }}
        </div>
      </a-menu-item>
      <a-menu-divider/>
      <a-menu-item>
        <a href="/account">
          <i :class="$style.menuIcon" class="icmn-user"></i> Edit Profile
        </a>
      </a-menu-item>
      <a-menu-item>
        <a href="/logout" @click="logout">
          <i :class="$style.menuIcon" class="icmn-exit"></i> Logout
        </a>
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
import { Dropdown, Avatar } from 'ant-design-vue'
window.Vue.use(Dropdown)
window.Vue.use(Avatar)
export default {
  props: {
    user: Object
  },
  data: function () {
    return {
    }
  },
  methods: {
    logout() {
      this.$auth.logout()
    },
  },
}
</script>

<style lang="scss" module>
@import "./style.module.scss";
</style>
