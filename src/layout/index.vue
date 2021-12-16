<template>
  <div class="app-wrapper">
    <div class="fixed-header">
      <NavBar class="navbar-container" />
    </div>
    <div class="main-container">
      <SideBar class="sidebar-container" />
      <AppMain class="appmain-container" />
    </div>
  </div>
</template>

<script setup>
import NavBar from './components/Navbar'
import SideBar from './components/Sidebar'
import AppMain from './components/AppMain.vue'
import {} from 'vue'
</script>

<style lang="scss" scoped>
@import '~@/styles/variables.scss';
@import '~@/styles/mixin.scss';
@import '~@/styles/sidebar.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}
.fixed-header {
  position: fixed;
  height: $navbarHeight;
  top: 0;
  right: 0;
  z-index: 9;
  width: 100%;
  background: #fff;
}
</style>
