<template>
  <el-menu :unique-opened="false">
    <el-submenu index="/">
      <template #title>
        <i class="el-icon-location"></i>
        <span>订单管理 </span>
      </template>
      <el-menu-item route="/" index="/">全部订单</el-menu-item>
    </el-submenu>
    <el-submenu index="2">
      <template #title>
        <i class="el-icon-location"></i>
        <span>商品管理</span>
      </template>
      <el-menu-item router="/allGoods" index="/allGoods">全部商品</el-menu-item>
      <el-menu-item router="/quicklyOnStock" index="/quicklyOnStock"
        >快捷上货</el-menu-item
      >
    </el-submenu>
  </el-menu>
</template>

<script setup>
import {} from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
console.log(router.getRoutes())
</script>

<style></style>
